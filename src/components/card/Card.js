import s from "./card.module.css"
import {Button} from "primereact/button";

const Card = ({title, grid, children, src, style, comp, id}) => {
    return (
        <div className={s.container} style={style}
             id={id}>
            <div className={s.title}>
                <Button label={title} icon={src}/>
                {comp && <div className={s.comp}>{comp}</div>}
            </div>
            <div className={grid ? s.inner_grid : s.inner_block}>
                {children}
            </div>
        </div>
    )
}

export default Card
