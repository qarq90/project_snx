"use client"
import React from 'react'
import {useRouter} from "next/navigation";
import {PrimeProviders} from "@/app/prime_providers";

const CreateLayout = ({children}) => {
    const router = useRouter()
    return (
        <>
            <PrimeProviders>
                {children}
            </PrimeProviders>
        </>
    )
}
export default CreateLayout
