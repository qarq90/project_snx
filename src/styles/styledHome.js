import styled from "styled-components";
import {Avatar} from "primereact/avatar";
import {motion} from "framer-motion";

export const StyledSection = styled.section`
    background-color: var(--primary-color-black);
    margin-left: 2rem;

    @media (max-width: 768px) {
	    margin-left: 0;
        padding: 4rem 1.15rem 3rem;
    }

    @media (min-width: 1024px) {
        padding: 7.5rem 5rem;
    }
`;

export const StyledContainer = styled(motion.div)`
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 768px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    > .works-div {
        margin-bottom: 3rem;
    }
`;

export const StyledFlexContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
`;

export const StyledTitle = styled(motion.h1)`
    width: 100%;
    margin-bottom: 1rem;
    color: var(--primary-theme-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        margin-left: 1rem;
        margin-top: -5rem;
        > svg {
            width: 5rem;
            height: 5rem;
            margin-right: 2rem;
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 1024px) {
        font-size: 4rem;
        > svg {
            margin-right: 2rem;
            height: 5rem;
            width: 5rem;
        }
    }
`;

export const StyledParagraph = styled(motion.p)`
	width: 100%;
    max-width: 43.75rem;
    margin-bottom: 1rem;
    color: var(--primary-text-color);

    @media (max-width: 768px) {
	    text-align: justify;
    }

    @media (prefers-color-scheme: dark) {
        color: var(--primary-text-color);
    }
`;

export const StyledGridContainer = styled(motion.div)`
    margin-top: 2rem;
    padding-left: 2.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        padding-left: 0;
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const StyledGridContainerAccesories = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        > a > div > svg {
            width: 5rem;
            height: 5rem;
            transition: 0.25s all linear;
            color: var(--primary-text-color);

            &:hover {
                color: var(--primary-theme-color);
            }
        }
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        > a > div > svg {
            margin: 2rem;
            width: 10rem;
            height: 10rem;
            transition: 0.25s all linear;
            color: var(--primary-text-color);

            &:hover {
                color: var(--primary-theme-color);
            }
        }
    }


`;

export const StyledGridItem = styled(motion.div)`
    background-color: var(--primary-comp-bg);
    padding: 2rem;
    overflow: hidden;
    transition: 0.25s all linear;
    box-shadow: var(--primary-theme-color) 5px 5px;

    @media (max-width: 768px) {
        > svg {
            margin-bottom: 1rem;
            width: 3.5rem;
            height: 3.5rem;
            color: var(--primary-text-color);
        }
    }

    @media (min-width: 1024px) {
        > svg {
            margin-bottom: 1rem;
            width: 3.5rem;
            height: 3.5rem;
            color: var(--primary-text-color);
        }
    }

`;

export const StyledGridTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--primary-text-color);
	
`;

export const StyledGridBlock = styled(motion.div)`
    margin-top: 5rem;
    padding: 2rem;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: 0.25s all linear;

    &:hover {
        cursor: pointer;
        box-shadow: var(--primary-theme-color) 0 0 5px 3px;
    }

    background-color: var(--primary-comp-bg);

`;

export const StyledUserName = styled.h3`
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    color: var(--primary-text-color);
    margin-left: 0.5rem;
`;

export const StyledUserText = styled(motion.p)`
    color: var(--primary-text-color);
    text-align: left;
    font-size: 0.875rem;
    margin-top: 0.75rem;
`;

export const StyledTopContainer = styled(motion.div)`
    padding: 1rem;
`;

export const StyledTopHeading = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const StyledTopParagraph = styled(motion.p)`
    font-size: 0.875rem;
    color: #888888;
`;

export const StyledBorderDiv = styled(motion.div)`
    border: 1px solid transparent;
    background-color: var(--primary-comp-bg);
    margin: 10px;
    height: 10rem;	
    box-shadow: var(--primary-theme-color) 5px 5px;
    text-align: center;
    padding: 20px;
`;

export const StyledUserFlex = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const StyledCarousel = styled(motion.div)`
    padding-top: 2rem;

    @media (max-width: 768px) {
    }

    @media (min-width: 1024px) {
        margin-left: 3rem;
    }

    > div > div > div > button {
        color: var(--primary-text-color);
    }
`;

export const StyledAvatar = styled(Avatar)`
    width: 3rem;
    height: 3rem;
    background-color: var(--primary-theme-color);
    margin-top: 0.5rem;
    font-size: 1.10rem;
    font-weight: bold;
    color: var(--primary-comp-bg);
`;
