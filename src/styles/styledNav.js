import styled from "styled-components";
import Link from "next/link";
import {motion} from "framer-motion";

export const NavContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-comp-bg);
  border-right: 4px var(--primary-theme-color) solid;
  transition: 0.25s all linear;
  position: fixed;
  z-index: 10000;

  &:hover {
    box-shadow: 5px 0 75px rgba(0, 128, 128, 0.3);
  }
`;

export const NavSubContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .navLinksTop {
    border-bottom: 4px solid var(--primary-theme-color);
    background-color: var(--primary-color-black);
  }

  > .navLinksBottom {
    margin-top: auto;
    border-top: 4px solid var(--primary-theme-color);
    background-color: var(--primary-color-black);
  }
`;

export const NavSubRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const NavSubLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const NavStyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const NavStyledLi = styled.li`
  width: 100%;
  font-size: 1.25rem;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: var(--primary-theme-color);
  width: 100%;
  display: flex;
  transition: 0.25s all linear;

  > p > svg {
    width: 30px;
  }

  &:hover {
    color: var(--primary-text-color);

    > p {
      transition: 0s all linear;
    }
  }
`;

export const NavStyledIcon = styled(motion.p)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  padding-right: 0.75rem;
  padding-left: 0.50rem;
  align-self: center;
`;

export const StyledNotLink = styled(motion.div)`
  color: var(--primary-theme-color);
  width: 100%;
  display: flex;
  transition: 0.25s all linear;

  > p > svg {
    width: 30px;
  }

  &:hover {
    color: var(--primary-text-color);
    cursor: pointer;

    > p {
      transition: 0s all linear;
    }
  }
`;