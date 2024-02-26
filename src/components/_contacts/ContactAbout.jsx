import {ContactAboutText, StyledContactSection} from "@/styles/styledContacts";
import {FaPersonCircleQuestion} from "react-icons/fa6";
import {scaleUp} from "@/styles/styledAnimations";
import {motion} from "framer-motion";
import HeaderTitle from "@/components/HeaderTitle";

export default function ContactAbout() {
    return (<>
        <StyledContactSection>
            <HeaderTitle
                icon={<FaPersonCircleQuestion/>}
                content={"About Us"}
            />
            <ContactAboutText
                variants={scaleUp}
                initial="initial"
                animate="show"
            >
                <motion.span
                    variants={scaleUp}
                >
                    SnX is a pioneering platform revolutionizing outfit customization through advanced 3D
                    technology. With a vision to democratize fashion, SnX empowers individuals to express their
                    unique style effortlessly.
                </motion.span>
                <br/>
                <br/>
                <motion.span
                    variants={scaleUp}
                >
                    Our intuitive interface offers endless customization options, from
                    fabric selection to fit adjustments, ensuring every outfit reflects your personality. Committed
                    to sustainability, SnX promotes eco-friendly practices and ethical sourcing. Join our community
                    of fashion enthusiasts, designers, and trendsetters, and explore the limitless possibilities of
                    our self-expression.
                </motion.span>
                <br/>
                <br/>
                <motion.span
                    variants={scaleUp}
                >
                    Experience the future of fashion with SnX – where creativity knows no bounds,
                    and individuality reigns supreme. Welcome to a world where fashion meets innovation, only at
                    SnX.
                </motion.span>
            </ContactAboutText>
        </StyledContactSection>
    </>)
}