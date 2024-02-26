"use client";

import React from "react";
import {motion} from "framer-motion";
import {scaleUp} from "@/styles/styledAnimations";
import HomeTitle from "@/components/home/HomeTitle";
import StyledProgressBar from "@/components/StyledProgressBar";
import HomeWorks from "@/components/home/HomeWorks";
import HomeCategories from "@/components/home/HomeCategories";
import HomeReviews from "@/components/home/HomeReviews";
import {EmptyBlock} from "@/components/EmptyBlock";

export default function Home() {
    return (
        <>
            <motion.div variants={scaleUp} initial="initial" animate="show" style={{paddingLeft: "2rem"}}>
                <StyledProgressBar/>
                <HomeTitle/>
                <HomeWorks/>
                <HomeCategories/>
                <HomeReviews/>
            </motion.div>
        </>
    );
}
