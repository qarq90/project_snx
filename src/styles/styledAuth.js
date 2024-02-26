import {styled} from "styled-components";
import {Canvas} from '@react-three/fiber'

export const AuthCanvas = styled(Canvas)`
  height: 100vh;
  width: 100vw;
  background-color: #1d1d1d;
`;

export const LoginPageDiv = styled.div`
  background-color: #2c2c2c;
  width: 100vw;
  height: 100vh;
  overflow:hidden;
  color: var(--primary-theme-color);
`;

export const LoginFormDiv = styled.div`
  height: fit-content;
  width: 35vw;
  padding: 3rem;
  backdrop-filter: blur(20px) saturate(174%);
  -webkit-backdrop-filter: blur(20px) saturate(174%);
  background-color: var(--primary-bg);
  border: 3px solid var(--primary-theme-color);
  transition: all linear 0.5s;

  > .myTabs {
    margin-top: 2rem;
    margin-left: 6.5rem;

    > div {
      border: solid var(--primary-theme-color) 3px;
      border-radius: 0;
      background-color: var(--primary-comp-bg);

      > button {
        width: 7rem;

        > span.bg-danger {
          background-color: var(--primary-theme-color);

        }
      }
    }

    * {
      border-radius: 0;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15%;
    text-align: center;
    width: 80%;
    box-shadow: 3px 3px var(--primary-theme-color);
    border-radius: 0;
    background-color: var(--primary-comp-bg);
  }

  position: absolute;
  left: 32%;
  top: 5rem;
`;

export const LoginModelDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-comp-bg);
`;

export const LoginProjectName = styled.h1`
  color: var(--primary-theme-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--primary-theme-color);
  text-align: center;
  font-family: sans-serif;
  font-size: 2rem;

  > span {
    padding-left: 1rem;
    letter-spacing: 3px;
  }
`;

export const SubDiv = styled.form`
  width: 100%;
  transition: 0.5s all linear;

  > button {
    width: 85%;
    margin-left: 3.5rem;
    padding: 1rem;
    border-radius: 0;
    background-color: var(--primary-comp-bg);
    box-shadow: 3px 3px var(--primary-theme-color);
  }
`;

export const SubDivTitle = styled.div`
  width: 10rem;
  margin-top: 2rem;
  text-align: center;
`;

export const SubDivInput = styled.div`
  color: var(--primary-theme-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const InputField = styled.input`
  height: 2rem;
  padding: 1rem;
  background-color: var(--primary-comp-bg);
  box-shadow: 3px 3px var(--primary-theme-color);
`;

export const StyledTitle = styled.h1`
  font-family: "Orbitron", sans-serif;
  margin-left: 2rem;
`;