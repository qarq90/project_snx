import {styled} from "styled-components";
import Link from "next/link";
import {Canvas} from "@react-three/fiber";
import {motion} from "framer-motion";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    position: relative;
    margin-bottom: 1rem;

    > .recent-loader {
        width: 100%;
        height: 100%;
        grid-column: span 2;
        grid-row: span 2;
        background: crimson;
    }

    @media (max-width: 768px) {
        grid-template-rows: 3.75rem 1fr 1fr;
    }
`;

export const StyledBlock = styled(motion.div)`
  border-radius: 0;
  background: var(--primary-comp-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 0 0.5rem rgba(0,0,0,0.5);
  
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

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
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

export const CardGridHeader = styled(motion.div)`
  position: absolute;
  top: 0;
  translate: 0 -100%;
  font-size: 2.5rem;
  color: var(--primary-theme-color);
  
  @media (max-width: 768px) {
    translate: 0 0;
    position: static;
    grid-column: span 2;
  }
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

export const PanelButton = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  z-index: 5000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  padding: 20px;
  border-radius: 10px;
  background-size: 40px;
  background-position: center;
  transition: scale 0.2s ease;
  background-repeat: no-repeat;
  box-shadow: 0 0 .5rem rgba(0,0,0,0.5); 
  background-color: var(--primary-color-black);
  background-image: url("https://freepngimg.com/icon/download/social_media/4100-google-bard.png");
  
  &:hover, &:focus, &:active {
    scale: 1.1;
  }
`;
