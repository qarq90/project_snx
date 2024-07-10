import s from "./card.module.css"
import {Button} from "primereact/button";

const Card = ({title, grid, children, src, style, comp, id, hidden}) => {
	const BottomStyles = {
		backgroundColor: 'var(--primary-comp-bg)',
	}
	return (
		<div className={s.container} style={{...style, display: hidden ? 'none' : 'block'}}
		     id={id}>
			<div className={s.title}>
				<Button label={title} icon={src}/>
				{comp && <div className={s.comp}>{comp}</div>}
			</div>
			<div style={BottomStyles} className={grid ? s.inner_grid : s.inner_block}>
				{children}
			</div>
		</div>
	)
}

export default Card
