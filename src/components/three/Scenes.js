import { invalidate, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import useStore from "../../states/modelState"
import LightsHarsh from "./LightsHarsh"
import ColorBg from "./sets/ColorBg"
import ImageBg from "./sets/ImageBg"
import ShapesBg from "@/components/three/sets/ShapesBg";
import DiscoLights from "@/components/three/DiscoLights";

const Scenes = () => {
    const { backgroundColor, modelColor, set, props } = useStore()
    const { animation } = useStore()

    useFrame(() => {
        if (animation) invalidate()
    })

    return (
        <>
            {set === "bg_color" && (
                <group>
                    <ColorBg backgroundColor={backgroundColor} />
                    { props !== "prop_disco" && <LightsHarsh /> }
                </group>
            )}
            {set === "bg_transparent" && (
                <group>
                    { props !== "prop_disco" && <LightsHarsh /> }
                </group>
            )}
            {set === "bg_image" && (
                <Suspense fallback={<LightsHarsh />}>
                    <ImageBg />
                    { props !== "prop_disco" && <LightsHarsh /> }
                </Suspense>
            )}
            {props === "prop_shapes" && (
                <ShapesBg />
            )}
            {props === "prop_shapes" && (
                <ShapesBg />
            )}
            {props === "prop_disco" && (
                <DiscoLights />
            )}
        </>
    )
}

export default Scenes
