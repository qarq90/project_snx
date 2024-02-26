"use client"

import {PageContainer} from "@/styles/styledGlobal";
import TrendingTitle from "@/components/_trending/TrendingTitle";
import TrendingGrid from "@/components/_trending/TrendingGrid";

export default function Page() {
    return (
        <>
            <PageContainer>
                <TrendingTitle/>
                <TrendingGrid/>
            </PageContainer>
        </>
    );
}