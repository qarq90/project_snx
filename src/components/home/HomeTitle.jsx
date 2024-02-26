import {StyledContainer, StyledFlexContainer, StyledParagraph, StyledSection, StyledTitle} from "@/styles/styledHome";
import React from "react";
import ShirtIcon from "@/lib/objNav";

export default function HomeTitle() {
    return (<>
        <StyledSection>
            <StyledContainer>
                <StyledFlexContainer>
                    <StyledFlexContainer>
                        <StyledTitle>
                            <ShirtIcon/> SnX
                        </StyledTitle>
                        <StyledParagraph>
                            Create your unique style with our 3D outfit customizer. Explore endless
                            possibilities
                            and make your
                            fashion statement.
                        </StyledParagraph>
                    </StyledFlexContainer>
                </StyledFlexContainer>
            </StyledContainer>
        </StyledSection>

    </>)
}