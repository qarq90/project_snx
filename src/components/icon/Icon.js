import s from "./icon.module.css"

export default function Icon({
    imgSrc,
    imgAlt,
    textContent,
    onClick,
    id,
    match,
    inactive,
    ...rest
}) {
    const handleClick = () => {
        // External
        onClick()
    }

    return (
        <div
            onClick={inactive ? null : handleClick}
            className={inactive ? s.wrapper_inactive : s.wrapper}
            {...rest}
        >
            {imgSrc && <img className={s.icon} src={imgSrc} alt={imgAlt} />}
            {id === match && <div className={s.flag} />}
            {textContent && <p className={s.text}>{textContent}</p>}
        </div>
    )
}
