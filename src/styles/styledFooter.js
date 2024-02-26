import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 0.80rem;
  border-top: 4px var(--primary-theme-color) solid;
  background-color: var(--primary-comp-bg);
  margin-left: 5%;
  padding: 1.9% 3%;
  display: flex;
  align-items: center;
  color: var(--primary-theme-color);

  > nav {
    margin-left: 64%;
    display: flex;

    > a {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      transition: 0.25s all linear;
      color: var(--primary-theme-color);

      &:hover {
        color: var(--primary-text-color);
        transition: 0.25s all linear;
      }

      > div {
        padding: 0 0.5rem;
      }
    }
  }
`;