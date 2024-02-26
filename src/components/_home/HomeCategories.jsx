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
import {fadeUp, scaleUp} from "@/styles/styledAnimations";
import {motion} from "framer-motion";

export default function HomeCategories() {
    return (<>
        <StyledSection>
            <StyledContainer>
                <StyledFlexContainer>
                    <StyledFlexContainer
                        variants={scaleUp}
                        initial="initial"
                        animate="show"
                    >
                        <StyledTitle
                            variants={fadeUp}
                        >
                            Explore Outfit Categories
                        </StyledTitle>
                        <StyledParagraph
                            variants={fadeUp}
                        >
                            Choose from tops, bottoms, shoes, and accessories.
                        </StyledParagraph>
                    </StyledFlexContainer>
                    <StyledGridContainerAccesories
                        variants={scaleUp}
                        initial="initial"
                        animate="show"
                    >
                        {catogories.map((item) => (
                            <Link key={item.id} href={item.path}>
                                <motion.div
                                    variants={scaleUp}
                                >
                                    {item.icon}
                                </motion.div>
                            </Link>
                        ))}
                    </StyledGridContainerAccesories>
                </StyledFlexContainer>
            </StyledContainer>
        </StyledSection>
    </>)
}