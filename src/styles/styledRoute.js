import styled from "styled-components";

export const RouteAuthContainer = styled.div`
  box-shadow: var(--primary-theme-color) 0 0 5px 3px;
  transition: 0.25s all linear;
  padding: 2rem;
  position: fixed;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  background-color: var(--primary-comp-bg);
  z-index: 10000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const RouteTitle = styled.h1`
  font-size: 2rem;
  color: var(--primary-theme-color);
  display: flex;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }
`;

export const RouteDescription = styled.p`
  font-size: 1rem;
  color: var(--primary-text-color);
  text-align: center;
`;

export const RouteButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RouteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.5rem;
  background-color: var(--primary-theme-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color-black);
  }

  > svg {
    margin-right: 1rem;
  }
`;