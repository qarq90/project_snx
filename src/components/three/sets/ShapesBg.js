import {useRef} from "react"
import {useGLTF} from "@react-three/drei";

const ShapesBg = () => {
    return (<group>
        <FrenchFries scale={0.35} position={[0.65, 0.35, 0.5]} rotation={[0.5, 0, 0]}/>
        <BagOfCandy scale={0.15} position={[0.65, 0, 0.5]} rotation={[-0.5, 0, 0]}/>
        <Ruby scale={0.08} position={[-0.65, 0.35, 0.5]} rotation={[0.5, 0.3, 0]}/>
        <Keyboard scale={0.1} position={[-0.65, -0.3, 0.5]} rotation={[2, 0.3, 0]}/>
        <Headphones scale={0.1} position={[0.65, -0.6, 0.5]} rotation={[0, 0.3, 0]}/>
    </group>)
}

export default ShapesBg


function FrenchFries(props) {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/fries/model.gltf')
    return <primitive object={scene} {...props} />
}

function BagOfCandy(props) {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/candy-bag/model.gltf')
    return <primitive object={scene} {...props} />
}


function Candy(props) {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/candy/model.gltf')
    return <primitive object={scene} {...props} />
}


function Ruby(props) {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf')
    return <primitive object={scene} {...props} />
}


function Keyboard(props) {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/mechanical-keyboard/model.gltf')
    return <primitive object={scene} {...props} />
}


function Headphones(props) {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf')
    return <primitive object={scene} {...props} />
}