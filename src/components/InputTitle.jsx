import React from "react";
import {StyledTitle} from "@/styles/styledAuth";

export default function InputTitle({inputText}) {
    return (
        <>
            <StyledTitle className="text-2xl text-gray-50 text-center">{inputText}</StyledTitle>
        </>
    )
}