import styles from "./button.module.css"

const Button = ({ onClick, type, inactive, text, icon, style }) => {
    return (
        <button
            type="submit"
            onClick={type !== "inactive" && onClick}
            className={`${styles.container} ${
                inactive && styles.container_inactive
            } ${type === "ghost" && styles.container_ghost} ${
                type === "filled" && styles.container_filled
            }`}
            style={style}
        >
            {icon && icon}
            {icon && <div className={styles.spacer} />}
            {text && <p className={styles.text}>{text}</p>}
        </button>
    )
}

export default Button
