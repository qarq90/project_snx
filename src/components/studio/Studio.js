"use client"
import React from "react"
import ControlPanel from "@/components/controlPanel/ControlPanel"
import Viewer from "@/components/three/Viewer"
import styles from "./studio.module.css"

export default function Studio({mode, modelUrl}) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.main} id="studio-viewer">
                    <Viewer mode={mode} modelUrl={modelUrl}/>
                </div>
                <div className={styles.cpWrapper} id="design-options">
                    <ControlPanel/>
                </div>
            </div>
        </>
    )
}
