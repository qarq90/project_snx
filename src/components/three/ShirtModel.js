import {useFrame, useLoader} from "@react-three/fiber"
import {useEffect, useRef} from "react"
import {a} from "@react-spring/three"
import * as THREE from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import useStore from "../../states/modelState"
import Decals, {createDecal} from "./Decals"
import useDecalStore from "@/states/decalState";
import {process_image} from "@/lib/imageUtils";

const ShirtModel = ({modelRef, groupRef, url, rotation, setModelRayData}) => {

    // GLOBAL STATE
    const {
        animation,
        decals,
        addDecal,
        decalPath,
        decalName,
        decalSize,
        initialDecalSize,
        modelColor,
        setDecalPath,
        addDecalImages,
        setDecalSize,
        setDecalName,
        scale,
        removeDecal
    } = useStore()

    const {addDecalData} = useDecalStore()

    // STATE
    const timestamp = useRef(window.performance.now())

    // ANIMATE
    useFrame(() => {
        if (animation === "animation_360") {
            groupRef.current.rotation.y += (Math.PI * 2) / (60 * 7)
        }
    })
    useEffect(() => {
        if (!animation) groupRef.current.rotation.y = 0
    }, [animation])

    // LOAD MODEL
    const gltf = useLoader(GLTFLoader, url)

    // ADD DECAL TO ARRAY
    const handleDecal = (e) => {
        // Get texture
        process_image(decalPath).then(image => {
            new THREE.TextureLoader().load(image, (decalTexture) => {
                const {x: x1, y: y1, z: z1} = e.intersections[0].point
                const {x: x2, y: y2, z: z2} = modelRef.current.localToWorld(e.intersections[0].face.normal)

                const {decal, key} = createDecal(modelRef.current, // Geometry
                    new THREE.Vector3(x1, y1, z1), // Position
                    new THREE.Vector3(x2, y2, z2), // Normal
                    decalTexture, // Texture
                    decalSize // Size of longest side
                )

                const obj = {
                    key: key,
                    model: {...modelRef.current},
                    position: {x: x1, y: y1, z: z1},
                    normal: {x: x2, y: y2, z: z2},
                    texture: image,
                    textureName: decalName,
                    size: decalSize
                }

                addDecalData(obj)

                // Add decal to decal manager
                addDecalImages({path: image, name: decalName, key: key})

                // Add decal to state
                addDecal({mesh: decal, key: key})

                // Remove decal for one time use
                setDecalPath(null)
                setDecalName(null)

                // Reset decal size
                setDecalSize(initialDecalSize)
            })
        })
    }

    // PASS RAYCAST
    const passRaycast = (e) => {
        // Only submit while decal is active
        if (decalPath) {
            if (timestamp.current + 16 <= window.performance.now()) {
                // DEBOUNCE: Update timestamp for new interval
                timestamp.current = window.performance.now()

                // Get position
                const posV = e.point.clone()

                // Get world normal
                const n = e.face.normal.clone()
                const nWorld = modelRef.current.localToWorld(n)

                // Set pos and normal
                setModelRayData({position: posV, normalWorld: nWorld})
            }
        }
    }

    // RESET RAYCAST POS AND NORMAL
    const removeRaycast = () => setModelRayData(null)

    return (<a.group ref={groupRef} rotation={rotation} castShadow scale={scale}>
        <mesh
            ref={modelRef}
            onPointerMove={passRaycast}
            onPointerOut={removeRaycast}
            onPointerDown={handleDecal}
            geometry={gltf.scene.children[0].geometry}
            castShadow
        >
            <meshStandardMaterial
                color={modelColor}
            />
        </mesh>
        <Decals decals={decals}/>
    </a.group>)
}

export default ShirtModel
