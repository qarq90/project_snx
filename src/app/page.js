"use client";

import React from "react";
import {motion} from "framer-motion";
import {fadeLeft} from "@/styles/styledAnimations";
import HomeTitle from "@/components/home/HomeTitle";
import StyledProgressBar from "@/components/StyledProgressBar";
import HomeWorks from "@/components/home/HomeWorks";
import HomeCategories from "@/components/home/HomeCategories";
import HomeReviews from "@/components/home/HomeReviews";

export default function Home() {

	return (
		<>
			<motion.div
				variants={fadeLeft}
				initial="initial"
				animate="show"
				style={{width: "100vw"}}
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
