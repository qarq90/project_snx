import styled from "styled-components";
import {motion} from "framer-motion";

export default function HeaderSub({content}) {
    return (
        <>
            <SHeaderSub>
                {content}
            </SHeaderSub>
        </>
    )
}

const SHeaderSub = styled(motion.h1)`
  padding: 1rem 0 0.5rem;
  color: var(--primary-text-color);
  font-size: 1.25rem;
  margin-left: 2rem;
  width: 100%;
`;