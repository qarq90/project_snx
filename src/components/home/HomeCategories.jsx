import {
    StyledContainer,
    StyledFlexContainer,
    StyledGridContainerAccesories,
    StyledParagraph,
    StyledSection,
    StyledTitle
} from "@/styles/styledHome";
import React from "react";
import {catogories} from "@/lib/objHome";
import Link from "next/link";

export default function HomeCategories() {
    return (<>
            <StyledSection>
                <StyledContainer>
                    <StyledFlexContainer>
                        <StyledFlexContainer>
                            <StyledTitle>
                                Explore Outfit Categories
                            </StyledTitle>
                            <StyledParagraph>
                                Choose from a variety of tops, bottoms, shoes, and accessories.
                            </StyledParagraph>
                        </StyledFlexContainer>
                        <StyledGridContainerAccesories>
                            {catogories.map((category) => (
                                <Link href={category.path} key={category.id} target="_blank">
                                    <div key={category.id}>{category.icon}</div>
                                </Link>
                            ))}
                        </StyledGridContainerAccesories>
                    </StyledFlexContainer>
                </StyledContainer>
            </StyledSection>
        </>
    )
}