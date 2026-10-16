import {FaPerson} from "react-icons/fa6";
import {fadeLeft} from "@/styles/styledAnimations";
import {StyledTitle} from "@/styles/styledHome";
import React from "react";
import {styled} from "styled-components";
import {contactAboutContent} from "@/lib/objContact";

export default function ContactAbout(props) {
	return (
		<>
			<AboutContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
			>
				<div className="text-container">
					<StyledTitle
						variants={fadeLeft}
					>
						<FaPerson/> About Us
					</StyledTitle>
					<AboutParagraphContainer>
						{contactAboutContent.map((content, index) => (
							<AboutParagraph key={index} variants={fadeLeft}>
								{content}
								<br/>
								<br/>
							</AboutParagraph>
						))}
					</AboutParagraphContainer>
				</div>
			</AboutContainer>
		</>
	);
}

const AboutContainer = styled.div`
    margin: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;

    > div > h1 {
        margin-bottom: 3rem;
    }

    @media (max-width: 768px) {
        margin: 1.5rem;
        width: 95%;
    }

    @media (max-width: 480px) {
        margin: 1rem;
        width: 100%;
    }
`;

const AboutParagraphContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const AboutParagraph = styled.div`
    text-align: justify;
    width: 75%;
    font-size: 1.2rem;
    color: var(--primary-text-color);

    @media (max-width: 768px) {
        width: 85%;
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        width: 95%;
        font-size: 0.9rem;
    }
`;
