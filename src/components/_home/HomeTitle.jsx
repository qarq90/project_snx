import {StyledContainer, StyledFlexContainer, StyledParagraph, StyledSection, StyledTitle} from "@/styles/styledHome";
import React from "react";
import ShirtIcon from "@/lib/objNav";
import {fadeUp, scaleUp} from "@/styles/styledAnimations";

export default function HomeTitle() {
    return (<>
        <StyledSection>
            <StyledContainer>
                <StyledFlexContainer
                    variants={scaleUp}
                    initial="initial"
                    animate="show"
                >
                    <StyledTitle
                        variants={fadeUp}
                    >
                        <ShirtIcon/> SnX
                    </StyledTitle>
                    <StyledParagraph
                        variants={fadeUp}
                    >
                        Create your unique style with our 3D outfit customizer. Explore endless
                        possibilities
                        and make your
                        fashion statement.
                    </StyledParagraph>
                </StyledFlexContainer>
            </StyledContainer>
        </StyledSection>
    </>)
}