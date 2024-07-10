import styled from "styled-components";
import {InputTextarea} from 'primereact/inputtextarea';
import {motion} from "framer-motion";

export const ContactSection = styled.section`
    width: 100%;
    margin: 2rem 0;

    @media (min-width: 768px) {
        padding: 24px 0;
    }

    @media (max-width: 768px) {
        margin-left: 1rem;
    }

    @media (min-width: 1024px) {
        padding: 32px 0;
    }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 32px;
  }
`;

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const HeaderText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const ContactGrid = styled.div`
    margin-top: 3rem;
    margin-left: 2rem;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media (max-width: 768px) {
	    margin-left: 1rem;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContactItem = styled.a`
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--primary-comp-bg);
    background-color: var(--primary-comp-bg);
    padding: 16px;
    transition: all 0.3s ease;

    &:hover {
	    cursor: pointer;
        border-color: var(--primary-text-color);
    }
`;

export const ContactIcon = styled.div`
    background-color: var(--primary-comp-bg);
    color: var(--primary-text-color);
    border-radius: 50%;
    padding: 10px;
    transition: color 0.3s ease;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

    > svg {
        scale: 1.5;
    }
`;

export const ContactTitle = styled.h3`
    font-size: 18px;
    color: var(--primary-text-color);
    font-weight: bold;
    transition: color 0.3s ease;
    margin-bottom: 8px;
`;

export const ContactLink = styled.a`
    font-size: 16px;
	color: var(--primary-text-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primary-text-color);
    }
`;

export const StyledContactSection = styled(motion.div)`
  margin-left: 1rem;
  width: 92vw;
  margin-bottom: 3rem;
`;

export const ContactCardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  height: 15rem;

  > a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0;
    height: auto;
    width: 100%;
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

  @media (max-width: 768px) {
    height: auto;
    width: 90%;
    margin: 5px auto;
    justify-content: space-between;
    padding-inline: 15px;
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
  
  @media (max-width: 768px) {
    margin-left: 0;
    position: relative;
    left: 50%;
    translate: -50%;
    text-align: justify;
  }
`;

export const ContactAccordianContainer = styled(motion.div)`
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 94%;

    @media (max-width: 768px) {
        padding: 0;
        width: 100%;
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
                        display: flex;
                        background-color: var(--primary-comp-bg);
                        width: 100%;

                        &:hover {
                            cursor: pointer;
                        }

                        > div > span {
                            font-size: 0.9rem;
                            color: var(--primary-text-color);

                        }

                        > span {
                            font-weight: bolder;
                            margin-left: auto;
                            color: var(--primary-theme-color);
                        }
                    }
                }

                > section > div {
                    font-size: 0.9rem;
                    color: var(--primary-text-color);
                }

                > section {
                    color: var(--primary-color-black);
                }
            }
        }
    }

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
                    display: flex;
                    background-color: var(--primary-comp-bg);
                    width: 100%;

                    &:hover {
                        cursor: pointer;
                    }

                    > div > span {
                        color: var(--primary-text-color);

                    }

                    > span {
                        margin-left: auto;
                        color: var(--primary-theme-color);
                    }
                }
            }

            > section > div {
                color: var(--primary-text-color);
            }

            > section {
                color: var(--primary-color-black);
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
  
  @media (max-width: 768px) {
    margin-left: 1rem;
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

  @media (max-width: 768px) {
    margin-left: 1rem;
    width: 43%;
  }
`;
