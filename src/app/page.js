"use client";

import React, {useEffect} from "react";
import {motion} from "framer-motion";
import { scaleUp} from "@/styles/styledAnimations";
import HomeTitle from "@/components/home/HomeTitle";
import StyledProgressBar from "@/components/StyledProgressBar";
import HomeWorks from "@/components/home/HomeWorks";
import HomeCategories from "@/components/home/HomeCategories";
import HomeReviews from "@/components/home/HomeReviews";
import {useRouter} from "next/navigation";

let i = 0

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        if (i === 0) {
            router.push("/auth");
            i = 2
            console.log(i)
        }
    }, []);


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
