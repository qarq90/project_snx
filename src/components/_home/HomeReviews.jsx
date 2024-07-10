import React from "react";
import {useMediaQuery} from 'react-responsive';
import {userReviews} from "@/lib/objHome";
import {Carousel} from 'primereact/carousel';
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
import {scaleUp} from "@/styles/styledAnimations";

export default function HomeReviews() {
	const isMobile = useMediaQuery({maxWidth: 768});

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
							variants={scaleUp}
						>
							Customer Reviews
						</StyledTitle>
						<StyledParagraph
							variants={scaleUp}
						>
							Hear from our satisfied customers who have created their
							unique outfits with our 3D customizer.
						</StyledParagraph>

					</StyledFlexContainer>
				</StyledContainer>
				<StyledCarousel
					variants={scaleUp}
					initial="initial"
					animate="show"
				>
					<Carousel
						value={userReviews}
						itemTemplate={ReviewTemplate}
						numVisible={isMobile ? 3 : 1}
						numScroll={1}
					/>
				</StyledCarousel>
			</StyledSection>
		</>
	)
}
