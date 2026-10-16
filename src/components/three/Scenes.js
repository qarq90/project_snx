import {invalidate, useFrame} from "@react-three/fiber"
import {Suspense} from "react"
import useStore from "../../states/modelState"
import LightsHarsh from "./LightsHarsh"
import ColorBg from "./sets/ColorBg"
import ImageBg from "./sets/ImageBg"
import ShapesBg from "@/components/three/sets/ShapesBg";

const Scenes = () => {
    const {backgroundColor, modelColor, set, props} = useStore()
    const {animation} = useStore()

    useFrame(() => {
        if (animation) invalidate()
    })

    return (
        <>
            {set === "bg_color" && (
                <group>
                    <ColorBg backgroundColor={backgroundColor}/>
                </group>
            )}
            {set === "bg_image" && (
                <Suspense fallback={<LightsHarsh/>}>
                    <ImageBg/>
                </Suspense>
            )}
            {props === "prop_shapes" && (
                <ShapesBg/>
            )}
            <LightsHarsh/>
        </>
    )
}

export default Scenes
