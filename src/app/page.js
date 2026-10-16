"use client";

import React from "react";
import {motion} from "framer-motion";
import {fadeLeft} from "@/styles/styledAnimations";
import HomeTitle from "@/components/home/HomeTitle";
import StyledProgressBar from "@/components/_ui/StyledProgressBar";
import HomeWorks from "@/components/home/HomeWorks";
import HomeCategories from "@/components/home/HomeCategories";
import HomeReviews from "@/components/home/HomeReviews";
import UseMobileDetect from "@/components/UseMobileDetect";

export default function Home() {
	const {isMobile} = UseMobileDetect();
	return (
		<>
			<motion.div
				variants={fadeLeft}
				initial="initial"
				animate="show"
				style={{width: "100vw", marginTop: isMobile() ? "4rem" : "0"}}
			>
				<StyledProgressBar/>
				<HomeTitle/>
				<HomeWorks/>
				<HomeCategories/>
				<HomeReviews/>
			</motion.div>
		</>
	);
}
