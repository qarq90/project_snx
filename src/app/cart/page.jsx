"use client"

import {CartItem} from "@/components/_cart/CartItem";
import {ObjCart} from "@/lib/objCart";
import {styled} from "styled-components";
import {useEffect, useState} from "react";
import {fadeLeft} from "@/styles/styledAnimations";
import {motion} from "framer-motion";
import {Button} from "@/components/_ui/Button";
import {FaBoxOpen} from "react-icons/fa";
import {ThreeDots} from "react-loader-spinner";

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            const res = await fetch('/api/get/cart?email=' + localStorage.getItem('user'))
            const data = await res.json()
            if (data) {
                setIsLoading(false)
                setCart(data.items)
            }
        }
        getCartItems().then()
    }, []);


    function calculateTotalPrice(cart) {
        return cart.reduce((total, item) => {
            return total + item.price;
        }, 0);
    }

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item._id !== id);
        setCart(newCart);

        console.clear()
        console.log('ID', id)

        const res = fetch('/api/post/cart/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('user'),
                id: id
            })
        })
    };

    const updateQuantity = async (id, price, quantity) => {
        const newCart = cart.map((item) =>
            item._id === id ? {...item, price: price * quantity, quantity: quantity} : item
        );
        setCart(newCart);

        const res = await fetch('/api/post/cart/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('user'),
                id: id,
                price: price * quantity,
                quantity: quantity
            })
        })
    };

    const checkout = () => {
        console.log("Checked Out")
        setIsLoading(!isLoading)
    }

    return (
        <>
            <CartPageContainer
                variants={fadeLeft}
                initial="initial"
                animate="show"
            >
                <ItemsContainer
                    variants={fadeLeft}
                >
                    <div className="items">
                        {
                            isLoading ?
                                <LoadingOverlay>
                                    <ThreeDots
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="#008080"
                                        radius="15"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </LoadingOverlay> :
                                <>
                                    {
                                        cart.map((item, index) => (
                                            <CartItem
                                                variants={fadeLeft}
                                                key={index}
                                                id={item._id}
                                                name={item.name}
                                                price={item.price}
                                                img={item.img}
                                                type={item.type}
                                                quantity={item.quantity}
                                                removeItem={removeItem}
                                                updateQuantity={updateQuantity}
                                                showSeparator={index !== ObjCart.length - 1}
                                            />
                                        ))
                                    }
                                    {cart.length === 0 && <EmptyCart><FaBoxOpen/> No items in the cart</EmptyCart>}
                                </>
                        }
                    </div>
                    <div className="checkout">
                        <div className="pay-details">
                            {
                                isLoading ?
                                    <LoadingOverlay>
                                        <ThreeDots
                                            visible={true}
                                            height="80"
                                            width="80"
                                            color="#008080"
                                            radius="15"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                    </LoadingOverlay> :
                                    <>
                                        <h4>Number of items: <span>{cart.length}</span></h4>
                                        <br/>
                                        <h3>Total: <span>${calculateTotalPrice(cart).toFixed(2)}</span></h3>
                                    </>
                            }
                        </div>
                        <div>
                            <Button onClick={checkout} text={"Checkout"}/>
                        </div>
                    </div>
                </ItemsContainer>
            </CartPageContainer>
        </>
    );
}

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartPageContainer = styled(motion.div)`
  background-color: var(--primary-color-black);
  padding-block: 1.5rem;
  margin-left: 5%;
  width: 100vw;
  padding-inline: 2.5rem 2rem;
  overflow: hidden;
  height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    height: calc(100vh - 10.625rem);
    padding-left: 0 !important;
    padding-top: 1rem;
    margin-top: 4rem;
  }
`;

const ItemsContainer = styled(motion.div)`
  width: 95%;
  display: flex;
  justify-content: space-between;

  > .items {
    position: relative;
    margin: 0.5rem;
    width: 65%;
    height: calc(100vh - 8rem);
    padding: 0.5rem 3rem 0.5rem 1rem;
    background-color: var(--primary-comp-bg);
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow-y: auto;
    overflow-x: hidden;
  }

  > .checkout {
    width: 35%;
    margin-left: 0.5rem;
    color: var(--primary-text-color);

    @media (max-width: 768px) {
      margin-top: 1rem;
    }

    > .pay-details {
      margin: 0.5rem 0 0.5rem 0;
      padding: 1rem;
      background-color: var(--primary-comp-bg);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 1.15rem;
      min-height: 120px;
      position: relative;

      > h4, h3 {
        > span {
          font-weight: bold;
        }
      }
    }

    @media (max-width: 768px) {
      margin-left: 1rem;
      width: 105%;
    }
  }

  > div {

    > .seperator {
      align-items: center;
      justify-content: space-between;
      margin-left: 1rem;
      height: 1px;
      width: 100%;
      opacity: 0.2;
      background-color: var(--primary-text-color);

      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > .items {
      margin-left: 1rem;
      width: calc(100% + 1.125rem);
      height: calc(100vh - 26.5rem);
      padding: 0.25rem;
      background-color: var(--primary-comp-bg);
      overflow-x: hidden;
    }
  }
`

// const CheckoutButton = styled.div`
//     margin: 1rem 0 0.5rem 0;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0.5rem;
//     color: var(--primary-comp-bg);
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     background-color: var(--primary-theme-color);
//     transition: 0.25s all linear;
//     font-size: 1.2rem;
//     font-weight: bold;
//
//     &:hover {
//         background-color: var(--primary-comp-bg);
//         color: var(--primary-theme-color);
//         cursor: pointer;
//     }
// `

const EmptyCart = styled.div`
  height: 35rem;
  color: var(--primary-text-color);
  font-weight: bold;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    height: 25rem;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

`
