import {styled} from "styled-components";

export const EmptyBlock = () => {
    return(
        <>
            <StyledEmptyBlock></StyledEmptyBlock>
        </>
    )
}

const StyledEmptyBlock = styled.div`
  height: 6rem;
  background-color: transparent;
  width: 100%;
`;