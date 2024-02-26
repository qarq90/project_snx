import {
    StyledContainer,
    StyledFlexContainer,
    StyledGridBlock,
    StyledGridContainer,
    StyledSection,
    StyledTitle,
    StyledTopContainer,
    StyledTopHeading,
    StyledTopParagraph
} from "@/styles/styledHome";
import React from "react";
import {fadeLeft, fadeRight, fadeUp, scaleUp} from "@/styles/styledAnimations";

export default function HomeCommunity() {
    return (
        <>
            <StyledSection>
                <StyledContainer
                    variants={scaleUp}
                    initial="initial"
                    animate="show"
                >
                    <StyledFlexContainer
                        variants={scaleUp}
                    >
                        <div className="space-y-2">
                            <StyledTitle>Explore our curated selection of outfits created by our
                                community.</StyledTitle>
                        </div>
                    </StyledFlexContainer>
                    <StyledGridContainer>
                        <StyledGridBlock
                            className="rounded-lg overflow-hidden shadow-lg"
                            variants={fadeLeft}
                            initial="initial"
                            animate="show"
                        >
                            <ShirtIcon/>
                            <StyledTopContainer>
                                <StyledTopHeading className="text-lg font-semibold mb-2">Casual Chic</StyledTopHeading>
                                <StyledTopParagraph className="text-gray-500 dark:text-gray-400">A casual yet chic
                                    outfit perfect for a
                                    day out.</StyledTopParagraph>
                            </StyledTopContainer>
                        </StyledGridBlock>
                        <StyledGridBlock
                            className="rounded-lg overflow-hidden shadow-lg"
                            variants={fadeUp}
                            initial="initial"
                            animate="show"
                        >
                            <ShirtIcon/>
                            <StyledTopContainer>
                                <StyledTopHeading className="text-lg font-semibold mb-2">Elegant
                                    Evening</StyledTopHeading>
                                <StyledTopParagraph className="text-gray-500 dark:text-gray-400">An elegant outfit for a
                                    special evening
                                    event.</StyledTopParagraph>
                            </StyledTopContainer>
                        </StyledGridBlock>
                        <StyledGridBlock
                            variants={fadeRight}
                            initial="initial"
                            animate="show"
                        >
                            <ShirtIcon/>
                            <StyledTopContainer>
                                <StyledTopHeading className="text-lg font-semibold mb-2">Sporty
                                    Comfort</StyledTopHeading>
                                <StyledTopParagraph className="text-gray-500 dark:text-gray-400">A sporty outfit that
                                    does not compromise
                                    on comfort.</StyledTopParagraph>
                            </StyledTopContainer>
                        </StyledGridBlock>
                    </StyledGridContainer>
                </StyledContainer>
            </StyledSection>

        </>
    )
}

function ShirtIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 50 50"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
    )
}
