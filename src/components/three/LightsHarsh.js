import React from "react"
import useStore from "@/states/modelState"


const Lights = () => {
    const {lights} = useStore()
    return (
        <>
            <ambientLight intensity={0.35} />
            {
                lights ?
                    <directionalLight
                        castShadow
                        position={[0.5, 0.3, 1]}
                        intensity={1}
                    />
                    :
                    <spotLight
                        position={[0.5, 0.1, 1.4]}
                        penumbra={0.3} // Adjust penumbra for softer shadows
                        intensity={1}
                        castShadow
                    />
            }
            <pointLight position={[0, 50, 0]} intensity={1.4} />
        </>
    )
}

export default Lights
