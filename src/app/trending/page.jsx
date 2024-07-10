'use client'

import TrendingGrid from "@/components/_trending/TrendingGrid";
import {fadeLeft} from "@/styles/styledAnimations";
import {PageContainer} from "@/styles/styledGlobal";
import StyledProgressBar from "@/components/_ui/StyledProgressBar";
import {StyledTitle} from "@/styles/styledHome";
import React from "react";
import {FaFire} from "react-icons/fa";

export default function Page() {
	return (
		<>
			<StyledProgressBar/>
			<PageContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
				style={{
					paddingLeft: "1rem"
				}}
			>
				<StyledTitle
					style={{
						paddingTop: "2.5rem",
					}}
					variants={fadeLeft}
				>
					<FaFire/> Trending Outfits
				</StyledTitle>
				<TrendingGrid/>
			</PageContainer>
		</>
	)
}
