import React from "react"
import IconWithText from "../iconWithText/IconWithText"
import useStore from "@/states/modelState"
import s from "./hotkeys.module.css"
import styled from "styled-components";

const Hotkeys = () => {
    const {decalPath, animation} = useStore()
    return (
        <StyledKeysContainer className={s.wrapper} style={{width: decalPath ? "200px" : "120px", display: (!decalPath && animation) ? "none" : null}}>
            {decalPath && (
                <>
                    <div className={s.inner}>
                        <>
                            <IconWithText
                                imgSrc={'/keys/keyUp.svg'}
                                imgAlt="up"
                                textContent="Scale up"
                            />
                            <IconWithText
                                imgSrc={'/keys/keyDown.svg'}
                                imgAlt="down"
                                textContent="Scale down"
                            />
                            <IconWithText
                                imgSrc={'/keys/keyEscRed.svg'}
                                imgAlt="Esc"
                                textContent="Cancel"
                            />
                        </>
                    </div>
                    { !animation && <hr style={{height: '5px', color: 'white'}}/> }
                </>
            )}
            {!animation && (
                <div className={s.inner}>
                    <IconWithText
                        imgSrc={'/keys/keyR.svg'}
                        imgAlt="rotate"
                        textContent="Rotate"
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
