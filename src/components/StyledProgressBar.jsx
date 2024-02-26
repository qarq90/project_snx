import {motion, useScroll} from "framer-motion";
import {styled} from "styled-components";

export default function StyledProgressBar() {
    const {scrollYProgress} = useScroll();
    return (
        <>
            <StyledBar
                style={{ scaleX: scrollYProgress }}
            />
        </>
    )
}

const StyledBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 5rem;
  right: 0;
  height: 4px;
  background: var(--primary-theme-color);
  width: 200vh;
  transform-origin: 0%;
  z-index: 100;
`;