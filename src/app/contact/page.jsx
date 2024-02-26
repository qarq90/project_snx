"use client"

import {PageContainer} from "@/styles/styledGlobal";
import ContactAbout from "@/components/_contacts/ContactAbout";
import ContactLinks from "@/components/_contacts/ContactLinks";
import ContactFAQ from "@/components/_contacts/ContactFAQ";
import ContactReview from "@/components/_contacts/ContactReview";
import StyledProgressBar from "@/components/StyledProgressBar";
import React from "react";
import {scaleUp} from "@/styles/styledAnimations";
import {EmptyBlock} from "@/components/EmptyBlock";

export default function Page() {
    return (
        <>
            <StyledProgressBar/>
            <PageContainer
                variants={scaleUp}
                initial="initial"
                animate="show"
                style={{
                    paddingLeft: "2.5rem"
                }}
            >
                <ContactAbout/>
                <ContactLinks/>
                <ContactFAQ/>
                <ContactReview/>
            </PageContainer>
        </>
    );
}