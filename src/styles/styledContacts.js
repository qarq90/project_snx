import styled from "styled-components";
import { InputTextarea } from 'primereact/inputtextarea';
import {motion} from "framer-motion";

export const StyledContactSection = styled(motion.div)`
  margin-left: 1rem;
  width: 92vw;
  margin-bottom: 3rem;
`;

export const ContactCardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 90%;
  height: 15rem;

  > a {
    text-decoration: none;
  }
`;

export const ContactCard = styled.button`
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-comp-bg);
  margin: 2rem;
  transition: 0.25s all linear;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    box-shadow: var(--primary-theme-color) 0 0 5px 3px;
  }
`;

export const ContactCardIcon = styled(motion.h1)`
  font-size: 4rem;
  color: var(--primary-theme-color);
  margin: 0.25rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactCardTitle = styled(motion.h1)`
  font-size: 2rem;
  height: 2rem;
  color: var(--primary-theme-color);
  margin: 0.25rem;
  padding-left: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContactCardText = styled(motion.h1)`
  font-size: 2rem;
  color: var(--primary-theme-color);
  margin: 0.25rem;
  text-align: center;
  padding-left: 0.50rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactAboutText = styled(motion.p)`
  width: 84vw;
  color: var(--primary-text-color);
  margin-left: 2rem;
  margin-top: 2rem;
`;

export const ContactAccordianContainer = styled(motion.div)`
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 94%;

  > div {
    text-align: left;

    > div {
      width: 100%;
      border-radius: 10px;
      background-color: var(--primary-comp-bg);

      > h2 {
        width: auto;
        background-color: var(--primary-comp-bg);

        > button {
          font-size: 1.10rem;
          padding: 1rem;
          display: flex;
          background-color: var(--primary-comp-bg);
          width: 100%;

          &:hover {
            cursor: pointer;
          }

          > div > span {
            color: #fff;
          }

          > span {
            color: #fff;
            margin-left: auto;
          }
        }
      }

      > section > div {
        color: #fff;
      }

      > section {
        padding: 1rem;
        background-color: var(--primary-comp-bg);
      }
    }
  }
`;

export const ContactInputContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  > #big-input {
    width: 90%;
  }

  > .feedback-input {
    height: 7rem
  }
  
  >.l-name{
    margin-left: -5rem;
  }
`;

export const ContactButton = styled(motion.button)`
  margin-left: 2rem;
  margin-top: 1rem;
  border-radius: 0;
  color: var(--primary-text-color);
  background-color: var(--primary-comp-bg);
  font-size: 1.25rem;
  width: 90%;
  padding: 0.5rem;
  transition: 0.25s all linear;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-theme-color);
  }
`;

export const ContactReviewInput = styled(InputTextarea)`
  margin-left: 2rem;
  background-color: var(--primary-comp-bg);
  padding: 0.50rem 1rem;
  border: solid var(--primary-theme-color) 2px;
  color: var(--primary-text-color);
  font-size: 1.25rem;
  width: 44%;

  &:focus {
    outline: none;
    box-shadow: var(--primary-theme-color) 3px 3px;
  }
`;

