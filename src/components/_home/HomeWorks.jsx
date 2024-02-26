import {
  StyledContainer,
  StyledFlexContainer,
  StyledGridContainer,
  StyledGridItem,
  StyledGridTitle,
  StyledParagraph,
  StyledSection,
  StyledTitle,
} from "@/styles/styledHome";
import React from "react";
import { works } from "@/lib/objHome";
import { fadeUp, scaleUp, scaleUpCard } from "@/styles/styledAnimations";

export default function HomeWorks() {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledFlexContainer
            className="works-div"
            variants={scaleUp}
            initial="initial"
            animate="show"
          >
            <StyledTitle variants={fadeUp}>How It Works</StyledTitle>
            <StyledParagraph variants={fadeUp}>
              Our 3D customizer allows you to visualize your outfit before
              making a purchase. Choose from a wide range of styles, colors and
              decals or upload your images and patterns to create your perfect look.
            </StyledParagraph>
          </StyledFlexContainer>
          <StyledGridContainer
            variants={scaleUpCard}
            initial="initial"
            animate="show"
          >
            {works.map((item, index) => (
              <StyledGridItem key={index} variants={scaleUpCard}>
                {item.icon}
                <StyledGridTitle variants={scaleUpCard}>
                  {item.title}
                </StyledGridTitle>
                <StyledParagraph variants={scaleUpCard}>
                  {item.description}
                </StyledParagraph>
              </StyledGridItem>
            ))}
          </StyledGridContainer>
        </StyledContainer>
      </StyledSection>
    </>
  );
}
