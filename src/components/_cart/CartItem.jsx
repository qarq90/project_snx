"use client";

import {styled} from "styled-components";
import {useEffect, useRef, useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";
import {QuantityButton} from "@/components/_ui/QuantityButton";
import {FaX} from "react-icons/fa6";


export const CartItem = (props) => {
    const dec = useRef(null);
    const getPrice = () => {
        return props.price / props.quantity
    }

    const [quantity, setQuantity] = useState(props.quantity);
    const [price, setPrice] = useState(getPrice() * quantity);

    const updateParent = (newQuantity) => {
        props.updateQuantity(props.id, getPrice(), newQuantity);
    }

    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setPrice(() => getPrice() * newQuantity);
        updateParent(newQuantity);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setPrice(() => getPrice() * newQuantity);
            updateParent(newQuantity);
        }
    };

    useEffect(() => {
        updateParent(quantity);
    }, []);

    return (
        <>
            <ItemContainer>
                <ModelContainer>
                    <img src={props.img} alt="model_image"/>
                </ModelContainer>
                <DetailsContainer>
                    <TopContainer>
                        <div>
                            <p className="name">Name: {props.name}</p>
                            <p className="type">Type: {props.type}</p>
                        </div>
                        <RemoveContainer>
                            <QuantityButton onClick={() => props.removeItem(props.id)} text={<FaX/>}/>
                        </RemoveContainer>
                    </TopContainer>
                    <BottomContainer>
                        <PriceContainer>
                            <p>${price.toFixed(2)}</p>
                        </PriceContainer>
                        <QuantityContainer>
                            <div>
                                <QuantityButton onClick={incrementQuantity} text={<FaPlus/>}/>
                                <div>
                                    {quantity}
                                </div>
                                <QuantityButton onClick={decrementQuantity} quantity={quantity} text={<FaMinus/>}/>
                            </div>
                        </QuantityContainer>
                    </BottomContainer>
                </DetailsContainer>
            </ItemContainer>
            {props.showSeparator && <div className="seperator"></div>}
        </>
    );
};

const ItemContainer = styled.div`
  padding: -1rem;
  width: 100%;
  display: flex;
  align-items: center;
  height: 145px;

  @media (max-width: 768px) {
    height: fit-content;
  }
`

const ModelContainer = styled.div`
  width: 180px;

  > img {
    object-fit: cover;
    height: 125px;
    width: 145px;
    margin-block: 5px;
    margin-inline: 10px 5px;
    background-color: #1d1d1d;
    box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 150px;

    > img {
      margin-block: 8px;
      height: 105px;
      width: 115px;
    }
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 115px;
  width: 60%;
  @media (max-width: 768px) {
    padding-bottom: 5px;
  }
`

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
  color: var(--primary-text-color);

  > div > .name {
    font-size: 1.2rem;
  }

  > div > .type {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding-top: .5rem;

    > div > .name {
      font-size: 0.9rem;
    }

    > div > .type {
      font-size: 0.8rem;
    }
  }
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PriceContainer = styled.div`
  > p {
    color: var(--primary-text-color);
    font-size: 1.1rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    > p {
      color: var(--primary-text-color);
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-right: -9rem;

  > div {
    display: flex;
    height: 2rem;
    align-items: center;
    background-color: var(--primary-color-black);
    border-radius: 8px;
    justify-content: center;
    box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 0.5rem;
    margin-top: -.3rem;
  }
`

const RemoveContainer = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  align-items: center;
  background-color: var(--primary-color-black);
  justify-content: center;
  margin-right: -9rem;
  box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--primary-text-color);

  &:hover {
    cursor: pointer;
  }

  &:active {
    scale: 0.9;
  }

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`
