import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    height: 4rem;
    border-top: 4px var(--primary-theme-color) solid;
    background-color: var(--primary-comp-bg);
    margin-left: 5%;
    padding: 0 3%;
    display: flex;
    align-items: center;
    color: var(--primary-theme-color);

    > nav {
        margin-left: 50%;
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
                scale: 0.9;
            }

            &:active {
                scale: 0.8;
            }

            > div {
                padding: 0 0.25rem;

                > svg {
                    scale: 1.0;
                }
            }
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 0;
        height: fit-content;
        > p {
            margin-top: 5%;
            text-align: center;
            width: 100%;
        }

        > nav {
            margin-top: 7%;
            margin-bottom: 5%;
            margin-left: 0;

            > a > div > svg {
                scale: 1.0;
            }
        }
    }
`;
