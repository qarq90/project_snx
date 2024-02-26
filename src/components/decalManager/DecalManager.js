import React, {useRef} from "react"
import {MdClose} from "react-icons/md"
import useStore from "../../states/modelState"
import s from "./decalManager.module.css"
import {FaPlus} from "react-icons/fa"
import {Ripple} from "primereact/ripple";
import useDecalStore from "@/states/decalState";

const DecalManager = () => {
    const {decalImages, modelColor, setDecalImages, removeDecal} = useStore()

    const {decalsData, setDecalsData} = useDecalStore()

    // REMOVE DECAL
    const handleRemove = (event) => {
        const key = event.target.dataset.key

        // Remove decal image
        let newArr = [...decalImages]
        let i = newArr.findIndex((el) => el.key == key) //eslint-disable-line
        newArr.splice(i, 1)
        // Remove decal Mesh
        setDecalImages(newArr)

        newArr = [...decalsData]
        i = newArr.findIndex((el) => el.key == key) //eslint-disable-line
        newArr.splice(i, 1)

        removeDecal(key)
        console.log("DD in DM:", newArr)
        setDecalsData(newArr)
    }

    return (
        <div className={s.imagesWrapper}>
            <AddDecal/>
            {decalImages.map((decal, i) => {
                return (
                    <div
                        key={decal.key}
                        className={s.imgContainerWrapper}
                        style={{
                            zIndex: decalImages.length - i,
                        }}
                    >
                        <div className={s.imgContainer} title={decal.name}>
                            <img
                                className={s.img}
                                src={decal.path}
                                style={{backgroundColor: modelColor, transition: "none"}}
                                alt={"decal thumbnail"}
                            />
                        </div>
                        <div
                            className={s.closeBtn}
                            onClick={handleRemove}
                            data-key={decal.key}
                        >
                            <MdClose style={{pointerEvents: "none"}}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DecalManager

const AddDecal = () => {
    const inputRef = useRef()
    const {setDecalPath, setDecalName} = useStore()

    const loadDecal = () => {
        const name = inputRef.current.files[0].name
        const path = URL.createObjectURL(inputRef.current.files[0])
        const reader = new FileReader();

        reader.onload = function (event) {
            const base64String = event.target.result;
            setDecalPath(base64String)
            setDecalName(name)
        };
        reader.readAsDataURL(inputRef.current.files[0]);

        inputRef.current.value = ""
    }

    const handleButtonClick = () => inputRef.current.click()
    return (
        <>
            <div className={s.addDecal} onClick={handleButtonClick}>
                <FaPlus/>
                <Ripple/>
            </div>
            <input
                style={{display: "none"}}
                onInput={() => loadDecal()}
                ref={inputRef}
                type="file"
                accept="image/*"
            />
        </>
    )
}