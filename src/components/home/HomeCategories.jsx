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
								<FaCategories/>
								Explore Outfit Categories
							</StyledTitle>
							<StyledParagraph>
								Choose from a variety of tops, bottoms, shoes, and accessories.
							</StyledParagraph>
						</StyledFlexContainer>
						<StyledGridContainerAccesories>
							{catogories.map((category) => (
								<Link href={category.path} key={category.id}>
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

const FaCategories = () => {
	const square = (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			style={{margin: '10px'}}
		>
			<path
				d="M10 10 L 90 10 L 90 90 L 10 90 Z"
				fill="var(--primary-theme-color)"
				stroke="var(--primary-theme-color)"
				strokeWidth="2"
			/>
		</svg>
	);

	return (
		<div style={{display: 'flex', justifyContent: 'space-around', scale: "0.5", marginRight: "-2rem"}}>
			<div>
				{square}
				{square}
			</div>
			<div>
				{square}
				{square}
			</div>
		</div>
	);
};
