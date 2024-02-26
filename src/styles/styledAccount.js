import {styled} from "styled-components";
import {motion} from "framer-motion";
import {Avatar} from "primereact/avatar";

export const AccountPop = styled(motion.div)`
  z-index: 1002;
  position: fixed;
  bottom: 10px;
  left: 6rem;
  height: auto;
  width: 400px;
  box-shadow: 0 0 .7rem rgba(0,128,128,0.5);
  border: var(--primary-theme-color) 3px solid;
  background-color: var(--primary-comp-bg);
  padding: 1rem;
`;

export const AccountContainer = styled(motion.div)`
  height: 100%;
`;

export const StyledAccountBanner = styled(motion.div)`
  border-radius: 0;
  box-shadow: var(--primary-theme-color) 5px 5px;
  background-color: var(--primary-color-black);
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerAccount = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 30%;

  > .accordianDiv {
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    border-radius: 100%;
  }

  > h1 {
    color: var(--primary-text-color);
  }

  > button {
    margin-left: auto;
    border-radius: 0;
    color: var(--primary-text-color);
    background-color: var(--primary-color-black);
    font-size: 1.25rem;

    &:hover {
      color: var(--primary-text-color);
      background-color: var(--primary-theme-color);
    }
  }
`;

export const SubMicroBanner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubMicroBannerA = styled(motion.div)`
  display: flex;
  width: 100%;
  margin: 2rem 0;
`;

export const SubMicroBannerB = styled(motion.div)`
  display: flex;
  width: 100%;

  > button {
    width: 15rem;
    margin-right: 1rem;
    border-radius: 0;
    color: var(--primary-text-color);
    background-color: var(--primary-comp-bg);
    font-size: 1.25rem;

    &:hover {
      color: white;
      background-color: var(--primary-color-red);
    }
  }
`;

export const SecondaryBanner = styled(motion.div)`
  width: 100%;
`;

export const MicroBanner = styled(motion.div)`
  width: 100%;
  //padding-inline: 0.5rem;
  display: flex;
`;

export const MicroBannerA = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccountDataField = styled.input`
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
  width: 100%;
  background-color: #1d1d1d;
  color: #ccc;
  border-left: 6px solid var(--primary-theme-color);
  
  &:focus {
    outline: none;
  }
`;

// -----------------------------------------------------------------

// -------------------------- Image Modal --------------------------

// -----------------------------------------------------------------

export const ImageModal = styled(motion.div)`
  padding: 1rem;
  width: 55%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 20%;
  background-color: var(--primary-color-black);
  border-radius: 10px;
  box-shadow: var(--primary-theme-color) 0 0 10px 5px;
`;

export const ModalButtonDiv = styled(motion.div)`
  display: flex;
  justify-content: center;

  > button {
    width: 15rem;
    margin-right: 1rem;
    border-radius: 0;
    color: var(--primary-text-color);
    background-color: var(--primary-comp-bg);
    font-size: 1.25rem;

    &:hover {
      color: white;
      background-color: var(--primary-theme-color);
    }
  }`;

export const ImageModalTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--primary-theme-color);
  border-bottom: 2px solid var(--primary-theme-color);
  padding: 1rem;
  margin-left: 5%;
  width: 90%;
  display: flex;
  justify-content: left;
  align-items: center;

  > svg {
    margin-right: 2rem;
  }
`;

export const ImageGridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 12rem 12rem 12rem 12rem;
  row-gap: 2rem;
  justify-content: center;
  width: 105%;
  padding: 2rem;
`;

export const StyledImage = styled.img`
  margin: 1rem;
  z-index: 10;
  width: 25rem;
  height: 15rem;
  object-fit: cover;
  transition: 0.25s all linear;

  &:hover {
    cursor: pointer;
    box-shadow: var(--primary-theme-color) 0 0 10px 5px;
  }
`;

export const StyledImageInput = styled.input`
  display: none;
`;

export const ImageInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  margin-right: 1rem;
  border-radius: 0;
  color: var(--primary-text-color);
  background-color: var(--primary-color-black);
  font-size: 1.25rem;

  &:hover {
    color: white;
    cursor: pointer;
    background-color: var(--primary-theme-color);
  }

  > svg {
    margin-right: 0.50rem;
  }
`;

export const StyledUserAvatar = styled(Avatar)`
  width: 7rem;
  height: 7rem;
  background-color: var(--primary-theme-color);
  font-size: 2rem;
  margin-top: 0.8rem;
  border-radius: 100%;
  font-weight: bold;
  color: var(--primary-text-color);
`;

export const StyledTopBanner = styled(motion.div)`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 1.25rem;
      margin: 1rem 0.5rem;
    }

    > button, a {
      display: flex;
      align-items: center;
      //width: 10rem;
      font-size: 1rem;
      padding: 0.5rem;
      justify-content: center;
      margin-left: 10px;
      border-radius: 0;
      color: var(--primary-text-color);
      background-color: var(--primary-color-black);
      transition: 0.25s all linear;

      > svg {
        margin-right: 0.5rem;
      }
      
      &:hover {
        color: white;
        background-color: var(--primary-color-red);
      }
    }
  }
`;