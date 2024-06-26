import {
    ContactCard,
    ContactCardIcon,
    ContactCardsContainer,
    ContactCardText,
    ContactCardTitle, StyledContactSection
} from "@/styles/styledContacts";
import {ObjContact} from "@/lib/objContact";
import Link from "next/link";
import {FaLink, FaMailBulk} from "react-icons/fa";
import {fadeLeft} from "@/styles/styledAnimations";
import HeaderTitle from "@/components/HeaderTitle";

export default function ContactLinks() {
    return (
        <>
            <StyledContactSection>
                <HeaderTitle
                    id="contact-links"
                    icon={<FaMailBulk/>}
                    content={"Contact Links"}
                />
                <ContactCardsContainer
                    variants={fadeLeft}
                    initial="initial"
                    animate="show"
                >
                    {ObjContact.map((card, index) => (
                        <Link
                            key={index}
                            href={card.path}
                            target="_blank"
                            variants={fadeLeft}
                            initial="initial"
                            animate="show"
                        >
                            <ContactCard
                                variants={fadeLeft}
                            >
                                <ContactCardIcon className="contact-icon">
                                    {card.icon}
                                </ContactCardIcon>
                                <ContactCardTitle>
                                    {card.title}
                                </ContactCardTitle>
                                <ContactCardText>
                                    <FaLink/>
                                </ContactCardText>
                            </ContactCard>
                        </Link>
                    ))}
                </ContactCardsContainer>
            </StyledContactSection>
        </>
    )
}
