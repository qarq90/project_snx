import styled from "styled-components";
import {motion} from "framer-motion";

export const PageContainer = styled(motion.div)`
  background-color: var(--primary-color-black);
  height: auto;
  padding: 1.5rem 2rem;
  margin-left: 5%;
  width: 100vw;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    padding-left: 0 !important;
    padding-top: 1rem;
    margin-top: 4rem;
  }
`;

export const CreatePageContainer = styled(motion.div)`
    background-color: var(--primary-color-black);
    display: flex;
    margin-left: 2rem;
    justify-content: center;
    align-items: center;
    width: Calc(100vw - 5rem);
    height: 100vh;
    @media (max-width: 768px) {
        margin-left: 0;
        width: 100vw;
        height: Calc(100vh - 5rem);
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 5rem;
        padding-top: 1.5rem;
    }
`;

export const StyledHead = styled(motion.p)`
  color: var(--primary-text-color);
  font-size: 0.9rem;
  margin-top: 1rem;
  width: 10rem;
`;
