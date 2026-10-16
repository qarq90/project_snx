"use client"

import {PageContainer} from "@/styles/styledGlobal";
import ContactAbout from "@/components/_contacts/ContactAbout";
import ContactLinks from "@/components/_contacts/ContactLinks";
import ContactFAQ from "@/components/_contacts/ContactFAQ";
import ContactReview from "@/components/_contacts/ContactReview";
import StyledProgressBar from "@/components/_ui/StyledProgressBar";
import React, {useEffect} from "react";
import {fadeLeft} from "@/styles/styledAnimations";
import useMobileDetect from "@/components/UseMobileDetect";

export default function Page() {
	const {isMobile} = useMobileDetect()

	useEffect(() => {
		console.log("Mobile: ", isMobile())
	}, []);

	return (
		<>
			<StyledProgressBar/>
			<PageContainer
				variants={fadeLeft}
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
