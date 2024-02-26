import {
    StyledAvatar,
    StyledBorderDiv,
    StyledCarousel,
    StyledContainer,
    StyledFlexContainer,
    StyledParagraph,
    StyledSection,
    StyledTitle,
    StyledUserFlex,
    StyledUserName,
    StyledUserText
} from "@/styles/styledHome";
import React from "react";
import {userReviews} from "@/lib/objHome";
import {Carousel} from 'primereact/carousel';
import {scaleUp} from "@/styles/styledAnimations";

export default function HomeReviews() {
    function ReviewTemplate(props) {
        let reviewerName = props.name;
        reviewerName = reviewerName.split(" ");
        reviewerName = reviewerName[0].charAt(0).toUpperCase() + reviewerName[1].charAt(0).toUpperCase();
        return (
            <StyledBorderDiv>
                <StyledUserFlex>
                    <StyledAvatar size="xlarge" shape="circle">
                        {reviewerName}
                    </StyledAvatar>
                    <StyledUserName>{props.name}</StyledUserName>
                </StyledUserFlex>
                <StyledUserText>{props.text}</StyledUserText>
            </StyledBorderDiv>
        );
    }

    return (
        <>
            <StyledSection
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <StyledContainer>
                    <StyledFlexContainer
                        variants={scaleUp}
                        initial="initial"
                        animate="show"
                    >
                        <StyledTitle
                            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
                            variants={scaleUp}
                        >
                            Customer Reviews
                        </StyledTitle>
                        <StyledParagraph
                            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                            variants={scaleUp}
                        >
                            Hear from our satisfied customers who have created their unique outfits with our 3D
                            customizer.
                        </StyledParagraph>

                    </StyledFlexContainer>
                </StyledContainer>
                <StyledCarousel
                    variants={scaleUp}
                    initial="initial"
                    animate="show"
                >
                    <Carousel value={userReviews} itemTemplate={ReviewTemplate} numVisible={3} numScroll={1}/>
                </StyledCarousel>
            </StyledSection>
        </>
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
