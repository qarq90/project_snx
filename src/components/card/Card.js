import s from "./card.module.css"
import {Button} from "primereact/button";

const Card = ({title, grid, children, src, style, comp, id}) => {
	const BottomStyles = {
		backgroundColor: 'var(--primary-comp-bg)',
	}
	const ButtonStyles = {
		color: 'var(--primary-theme-color)',
	};
	return (
		<div className={s.container} style={style}
		     id={id}>
			<div className={s.title}>
				<Button style={ButtonStyles} label={title} icon={src}/>
				{comp && <div className={s.comp}>{comp}</div>}
			</div>
			<div style={BottomStyles} className={grid ? s.inner_grid : s.inner_block}>
				{children}
			</div>
		</div>
	)
}

export default Card
