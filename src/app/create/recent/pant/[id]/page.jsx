"use client"
import React, {useEffect, useState} from 'react'
import useStore from "@/states/modelState";
import useAppStore from "@/states/appState";
import useDecalStore from "@/states/decalState";
import {LoadingScreen} from "@/styles/styledCreate";
import Studio from "@/components/studio/Studio";

const Page = ({params}) => {
    const {
        setModelColor,
        setBackgroundColor,
        setScale,
        setSizeType,
    } = useStore()
    const {decalsData, setDecalsData} = useDecalStore()
    const {saved, setSaved} = useAppStore()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/get/model?id=' + params.id)
            .then(res => res.json())
            .then(bigData => {
                const {_doc: data} = bigData
                setModelColor(data.modelColor)
                setBackgroundColor(data.backgroundColor)
                setScale(data.scale)
                setSizeType(data.sizeType)
                setDecalsData(data.decalsData)
                setLoading(false)
                setSaved({...saved, name: data.name, desc: data.desc, isUnSaved: false, state: true})
            })
    }, [])

    return (
        <>
            {
                loading ? (
                    <LoadingScreen>
                        <div>
                            <img src="/loading.gif" alt=""/>
                        </div>
                    </LoadingScreen>
                ) : <Studio mode={"recent"} modelUrl={'/models/pant/pant.glb'}/>
            }
        </>
    )
}
export default Page
