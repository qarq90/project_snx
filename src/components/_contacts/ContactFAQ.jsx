import {ContactAccordianContainer, StyledContactSection} from "@/styles/styledContacts";
import {FaClipboardQuestion} from "react-icons/fa6";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {contactAccordionItems} from "@/lib/objContact";
import {fadeDown, scaleUp} from "@/styles/styledAnimations";
import HeaderTitle from "@/components/HeaderTitle";

export default function ContactFAQ() {
    return (<>
        <StyledContactSection>
            <HeaderTitle
                id="faq"
                icon={<FaClipboardQuestion/>}
                content={"FAQ"}
            />
            <ContactAccordianContainer
                className="accordian-container"
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <Accordion
                    variant="splitted"
                    variants={fadeDown}
                >
                    {contactAccordionItems.map((item) => (
                        <AccordionItem
                            className="accordian"
                            key={item.key}
                            aria-label={item.ariaLabel}
                            variants={scaleUp}
                            title={item.title}
                            style={{backgroundColor: "var(--primary-comp-bg)"}}
                        >
                            {item.content}
                        </AccordionItem>))}
                </Accordion>
            </ContactAccordianContainer>
        </StyledContactSection>
    </>)
}