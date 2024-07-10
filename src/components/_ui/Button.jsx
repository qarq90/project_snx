import {styled} from "styled-components";

export const Button = (props) => {
	const handleClick = (e) => {
		const button = e.currentTarget;
		const circle = document.createElement('div');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
		props.onClick()
	};

	return (
		<StyledButton onClick={handleClick}>
			{props.text}
		</StyledButton>
	);
};

const StyledButton = styled.div`
    margin: 1rem 0 0.5rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: var(--primary-comp-bg);
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: var(--primary-theme-color);
    transition: 0.25s all linear;
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
    overflow: hidden;

    &:hover {
        background-color: var(--primary-comp-bg);
        color: var(--primary-theme-color);
        cursor: pointer;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.25);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
