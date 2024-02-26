import Studio from "@/components/studio/Studio";
import React from "react";

const Page = () => {
    return (
        <>
            <Studio mode={"new"} modelUrl={'/models/shoe/shoe.glb'} />
        </>
    )
}

export default Page
