import {styled} from "styled-components";
import Link from "next/link";
import {Canvas} from "@react-three/fiber";
import {motion} from "framer-motion";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: relative;
  
  > .recent-loader {
    width: 100%;
    height: 100%;
    grid-column: span 2;
    grid-row: span 2;
    background: crimson;
  }
`;

export const StyledBlock = styled.div`
  border-radius: 0;
  background: var(--primary-comp-bg);
  //padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    box-shadow: var(--primary-theme-color) 0 0 5px 3px;
  }
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  > .inactive {
    filter: invert(7%) sepia(17%) saturate(2%) hue-rotate(314deg) brightness(98%) contrast(89%);
    width: 55%;
    height: 55%;
  }
`;

export const BlockIcon = styled(Link)`
  color: var(--primary-theme-color);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s all linear;

  > svg {
    width: 65%;
    height: 65%;
  }
`;

export const CardGridHeader = styled.div`
  position: absolute;
  top: 0;
  translate: 0 -100%;
  font-size: 2.5rem;
  color: var(--primary-theme-color);
`;

export const CreateCanvasWrapper = styled(Canvas)`
  > div > canvas {
    height: 100vh !important;
    width: calc(100%);
  }
`;

export const SavingScreen = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: color-burn;
  z-index: 1000;

  > div.save-loader {
    background: white;

    > img {
      width: 100%;
    }
  }
`;

export const LoadingScreen = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: color-burn;
  z-index: 1000;

  > div.save-loader {
    background: white;

    > img {
      width: 100%;
    }
  }
`;


export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 128, 128, 0.4);
  z-index: 1001;
`

export const SavePopup = styled.div`
  margin-left: -1.25rem;
  padding-top: 20px;
  padding-inline: 10px;

  > p {
    font-family: "Bahnschrift", sans-serif;
    font-size: 1.25rem;
  }

  > div {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 5px;
    font-size: 1rem;
  }
`;

export const SavePopupFooter = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: row-reverse;

  > .btn-cancel {
    border: 1px solid var(--primary-theme-color);
  }

  > .btn-ok {
    background: var(--primary-theme-color);
  }

  > div {
    padding: 5px;
    border-radius: 5px;
  }

  > div > button {
    outline: none !important;
  }
`;
