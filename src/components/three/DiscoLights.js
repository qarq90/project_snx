import React from "react"
import useStore from "@/states/modelState"


const DiscoLights = () => {
    return (
        <>
            <ambientLight intensity={0.35} />
            <KeyLight brightness={24} color={"crimson"} />
            <FillLight brightness={54} color={"teal"} />
            <RimLight brightness={54} color={"purple"} />
            <pointLight position={[0, 50, 0]} intensity={1.4} />
        </>
    )
}

export default DiscoLights

function KeyLight({ brightness, color }) {
    return (
        <spotLight
            width={3}
            height={3}
            color={color}
            intensity={brightness}
            position={[-1, 0, 5]}
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow
        />
    );
}
function FillLight({ brightness, color }) {
    return (
        <spotLight
            width={3}
            height={3}
            intensity={brightness}
            color={color}
            position={[1, 1, 4]}
            lookAt={[0, 0, 0]}
            penumbra={2}
            castShadow
        />
    );
}

function RimLight({ brightness, color }) {
    return (
        <spotLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[1, 4, -2]}
            rotation={[0, 180, 0]}
            castShadow
        />
    );
}