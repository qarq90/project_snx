import React from "react";
import {ContactAccordianContainer, ContactSection} from "@/styles/styledContacts";
import {StyledContainer, StyledFlexContainer, StyledTitle} from "@/styles/styledHome";
import {fadeLeft} from "@/styles/styledAnimations";
import {FaQuestionCircle} from "react-icons/fa";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {contactAccordionItems} from "@/lib/objContact";

export default function ContactFAQ(props) {
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
							id="faq-title"
							variants={fadeLeft}
						>
							<FaQuestionCircle/> FAQ
						</StyledTitle>
					</StyledFlexContainer>
					<ContactAccordianContainer
						className="accordian-container"
						variants={fadeLeft}
						initial="initial"
						animate="show"
					>
						<Accordion
							variant="splitted"
							variants={fadeLeft}
						>
							{contactAccordionItems.map((item) => (
								<AccordionItem
									className="accordian"
									key={item.key}
									aria-label={item.ariaLabel}
									variants={fadeLeft}
									title={item.title}
									style={{backgroundColor: "var(--primary-comp-bg)"}}
								>
									{item.content}
								</AccordionItem>))}
						</Accordion>
					</ContactAccordianContainer>
				</StyledContainer>
			</ContactSection>
		</>
	)
}
