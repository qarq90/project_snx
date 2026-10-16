import {styled} from "styled-components";

export const QuantityButton = (props) => {
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
            <div className={props?.quantity === 1 ? 'active' : ''}>
                {props.text}
            </div>
        </StyledButton>
    );
};

const StyledButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: var(--primary-nav-text-color);
  border-radius: 8px;
  transition: 0.3s all ease;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .active {
    opacity: 0.4;
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
