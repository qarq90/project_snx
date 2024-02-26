import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeDown} from "@/styles/styledAnimations";

export default function HeaderTitle({content, icon}) {
    return (
        <>
            <StyledHeaderTitle
                variants={fadeDown}
                initial="initial"
                animate="show"
            >
                {icon}
                {content}
            </StyledHeaderTitle>
        </>
    )
}

export const StyledHeaderTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--primary-theme-color);
  border-bottom: 2px solid var(--primary-theme-color);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  margin-left: 2%;
  width: 90%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: normal;

  > svg {
    margin-right: 2rem;
  }
`;