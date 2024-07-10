import {
	ContactGrid,
	ContactIcon,
	ContactItem,
	ContactLink,
	ContactSection,
	ContactTitle
} from "@/styles/styledContacts";
import {FaLink} from "react-icons/fa";
import {fadeLeft} from "@/styles/styledAnimations";
import {StyledContainer, StyledFlexContainer, StyledParagraph, StyledTitle} from "@/styles/styledHome";
import React from "react";
import {contactLinks} from "@/lib/objContact";

export default function ContactLinks(props) {
	return (
		<>
			<ContactSection
			>
				<StyledContainer>
					<StyledFlexContainer
						variants={fadeLeft}
						initial="initial"
						animate="show"
					>
						<StyledTitle
							variants={fadeLeft}
						>
							<FaLink/> Get in Touch
						</StyledTitle>
						<StyledParagraph
							variants={fadeLeft}
						>
							Have a question or want to collaborate? Reach out to us through any of the channels below.
						</StyledParagraph>
					</StyledFlexContainer>
					<ContactGrid>
						{contactLinks.map((item, index) => (
							<ContactItem target="_blank" key={index} href={item.link}>
								<ContactIcon>{item.icon}</ContactIcon>
								<ContactTitle>{item.title}</ContactTitle>
								<ContactLink href={item.link}>{item.text}</ContactLink>
							</ContactItem>
						))}
					</ContactGrid>
				</StyledContainer>
			</ContactSection>
		</>
	)
}
