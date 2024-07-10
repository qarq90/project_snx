import styled from "styled-components";
import {motion} from "framer-motion";

export const STrendingContainer = styled(motion.div)`
    width: 92%;
    margin-left: 1.80rem;
`;

export const STrendingCard = styled(motion.div)`
    margin-left: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 24rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(61, 61, 61, 0.4);
    padding: 1rem;
    color: var(--primary-text-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000;

    > img {
        object-fit: cover;
        width: 75%;
        height: 300px;
        transition: transform 0.3s ease;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05) translateY(-10px);
        box-shadow: 0 10px 20px var(--primary-theme-color);

        > img {
            z-index: 100;
            transform: scale(1.25);
        }
    }

    @media (max-width: 1024px) {
        width: 20rem;
        margin-left: 0.8rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 768px) {
        width: 18rem;
        margin-left: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        > img {
            width: 90%;
        }
    }

    @media (max-width: 480px) {
        width: 15rem;
        margin-left: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

        > img {
            width: 80%;
        }
    }
`;

export const SCardImage = styled(motion.img)`
    object-fit: cover;

    @media (max-width: 768px) {
        height: 90%;
    }

    @media (max-width: 480px) {
        height: 80%;
    }
`;
