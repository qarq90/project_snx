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
import useMobileDetect from "@/components/UseMobileDetect";
import {FaUserEdit} from "react-icons/fa";

export default function HomeReviews() {
	const {isMobile} = useMobileDetect();

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
					<StyledUserText>{props.text}</StyledUserText>
				</StyledUserFlex>
			</StyledBorderDiv>
		);
	}

	return (
		<>
			<StyledSection>
				<StyledContainer>
					<StyledFlexContainer>
						<div className="space-y-2">
							<StyledTitle
								className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"><FaUserEdit/> Customer
								Reviews</StyledTitle>
							<StyledParagraph
								className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
								Hear from our satisfied customers who have created their unique outfits with our 3D
								customizer.
							</StyledParagraph>
						</div>
					</StyledFlexContainer>
				</StyledContainer>
				<StyledCarousel>
					<Carousel value={userReviews} itemTemplate={ReviewTemplate} numVisible={isMobile() ? 1 : 3}
					          numScroll={1}/>
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
