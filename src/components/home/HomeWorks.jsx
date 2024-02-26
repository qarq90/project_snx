import {
    StyledContainer,
    StyledFlexContainer,
    StyledGridContainer,
    StyledGridItem,
    StyledGridTitle,
    StyledParagraph,
    StyledSection,
    StyledTitle
} from "@/styles/styledHome";
import React from "react";
import {works} from "@/lib/objHome";

export default function HomeWorks() {
    return (
        <>
            <StyledSection>
                <StyledContainer>
                    <StyledFlexContainer>
                        <div className="space-y-2">
                            <StyledTitle>How It
                                Works</StyledTitle>
                            <StyledParagraph>
                                Our 3D customizer allows you to visualize your outfit before making a purchase.
                                Choose
                                from a wide range
                                of styles, colors, decals, texts or create your patterns to create your perfect look.
                            </StyledParagraph>
                        </div>
                    </StyledFlexContainer>
                    <StyledGridContainer>
                        {works.map((work, index) => (
                            <StyledGridItem key={index}>
                                {work.icon}
                                <StyledGridTitle>{work.title}</StyledGridTitle>
                                <StyledParagraph>{work.description}</StyledParagraph>
                            </StyledGridItem>
                        ))}
                    </StyledGridContainer>
                </StyledContainer>
            </StyledSection>
        </>
    )
}


function PaletteIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13.5" cy="6.5" r=".5"/>
            <circle cx="17.5" cy="10.5" r=".5"/>
            <circle cx="8.5" cy="7.5" r=".5"/>
            <circle cx="6.5" cy="12.5" r=".5"/>
            <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
    )
}

function TagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
            <path d="M7 7h.01"/>
        </svg>
    )
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    )
}