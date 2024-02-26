import styled from "styled-components";
import {motion} from "framer-motion";

export default function HeaderType({content, icon}) {
    return (
        <>
            <SHeaderType>
                {icon}
                {content}
            </SHeaderType>
        </>
    )
}

const SHeaderType = styled(motion.h1)`
  padding: 2rem 0 0;
  display: flex;
  align-items: center;
  color: var(--primary-text-color);
  font-size: 2.25rem;
  margin-left: 4.3rem;
  width: 100%;
  >svg{
    margin-right: 1rem;
  }
`;