import React from "react"
import IconWithText from "../iconWithText/IconWithText"
import useStore from "@/states/modelState"
import s from "./hotkeys.module.css"
import styled from "styled-components";
import useMobileDetect from "@/components/UseMobileDetect";

const Hotkeys = ({onClick}) => {
    const {decalPath, animation, incrementDecalSize, decrementDecalSize, setDecalPath, setPlaceDecal} = useStore()
    const {isMobile} = useMobileDetect()
    const width = isMobile() ? "0" : (decalPath ? "200px" : "120px")
    const padding = isMobile() ? "0" : "5px"
    // decalPath &&
    return (
        <StyledKeysContainer className={s.wrapper} style={{
            width: width,
            display: (!decalPath && animation) ? "none" : null,
            padding: padding,
            margin: '20px'
        }}>
            {decalPath && (
                <>
                    <div className={s.inner}>
                        <>
                            <IconWithText
                                imgSrc={'/keys/keyEnter.svg'}
                                imgAlt="enter"
                                hidden={!isMobile()}
                                onClick={() => {
                                    setPlaceDecal(true)
                                }}
                            />
                            <IconWithText
                                imgSrc={'/keys/keyUp.svg'}
                                imgAlt="up"
                                textContent="Scale up"
                                onClick={() => incrementDecalSize(0.05)}
                            />
                            <IconWithText
                                imgSrc={'/keys/keyDown.svg'}
                                imgAlt="down"
                                textContent="Scale down"
                                onClick={() => decrementDecalSize(0.05)}
                            />
                            <IconWithText
                                imgSrc={'/keys/keyEscRed.svg'}
                                imgAlt="Esc"
                                textContent="Cancel"
                                onClick={() => setDecalPath(null)}
                            />
                        </>
                    </div>
                    {!animation && <hr style={{height: '5px', color: 'white'}}/>}
                </>
            )}
            {!animation && (
                <div className={s.inner + ' ' + s.rotate}>
                    <IconWithText
                        imgSrc={'/keys/keyR.svg'}
                        imgAlt="rotate"
                        textContent="Rotate"
                        onClick={() => onClick(prev => prev + 90)}
                    />
                </div>
            )}
        </StyledKeysContainer>
    )
}

export default Hotkeys

const StyledKeysContainer = styled.div`
  background-color: var(--primary-color-black);
`;
