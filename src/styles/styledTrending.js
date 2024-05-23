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
    border-radius: 10px;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(61, 61, 61, 0.4);
    padding: 1rem;
    color: var(--primary-text-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    > img {
        transition: transform 0.3s ease;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05) translateY(-10px);
        box-shadow: 0 10px 20px var(--primary-theme-color);

        > img {
            transform: scale(1.25);
        }
    }
`;

export const SCardImage = styled(motion.img)`
    width: auto;
    height: 100%;
    object-fit: cover;
`;
