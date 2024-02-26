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
`;

export const SCardImage = styled(motion.img)`
  width: auto;
  height: 100%;
  object-fit:cover;
`;

