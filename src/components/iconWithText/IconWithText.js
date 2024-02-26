import s from "./iconWithText.module.css"
import styled from "styled-components";

export default function IconWithText({imgSrc, imgAlt, textContent, onClick}) {
    return (
        <div className={s.wrapper} onClick={onClick}>
            <img className={s.img} src={imgSrc} alt={imgAlt}/>
            {textContent && <StyledKeyText className={s.text}>{textContent}</StyledKeyText>}
        </div>
    )
}

const StyledKeyText = styled.p`
  color: var(--primary-text-color)
`;