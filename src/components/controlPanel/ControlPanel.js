import {invalidate} from "@react-three/fiber"
import {useEffect, useRef} from "react"
import useStore from "@/states/modelState"
import Card from "../card/Card"
import s from "./controlPanel.module.css"
import {Compact} from "@uiw/react-color";
import DecalManager from "@/components/decalManager/DecalManager";
import Icon from "@/components/icon/Icon";
import bgData from "@/constants/bg.json"
import bgSampleImages from "@/constants/bgSampleImages.json"
import TextEditor from "@/components/TextEditor";

export default function ControlPanel() {
    const customBgRef = useRef()
    const {
        animation,
        backgroundColor,
        backgroundImage,
        decals,
        modelColor,
        props,
        text,
        gl,
        setAnimation,
        setBackgroundColor,
        setBackgroundImage,
        setDecalPath,
        setModelColor,
        setLights,
        lights,
        scale,
        sizeType,
        setScale,
        setSizeType,
        setProps,
        set,
        setSet,
        setText,
    } = useStore()


    useEffect(() => {
        function handleKeyDownEvent(event) {
            const {key} = event
            key === "Escape" && setDecalPath(null)
        }

        document.addEventListener("keydown", handleKeyDownEvent)
        return () => {
            document.removeEventListener("keydown", handleKeyDownEvent)
        }
    }, []) //eslint-disable-line
    const handleAnimation = (mode) => {
        if (animation) {
            setAnimation(null)
        } else {
            setAnimation(mode)
        }
        // Jumpstart animation
        invalidate()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.containerInner}>
                <Card
                    id="color-container"
                    title="Color"
                    src="pi pi-palette"
                    style={{width: "248px"}}
                >
                    <Compact
                        className={s.colorPicker}
                        color={modelColor}
                        onChange={(c) => {
                            setModelColor(c.hex)
                        }}
                    />
                </Card>

                <Card
                    id="background-container"
                    title="Background"
                    src="pi pi-slack"
                    comp={
                        bgData.map((bg) => {
                            return (
                                <Icon
                                    onClick={() => {
                                        setSet(bg.name)
                                    }}
                                    style={{width: '28px', height: '28px', backgroundImage: `url('${bg.thumb}')`}}
                                    match={set}
                                    id={bg.name}
                                    key={bg.name}
                                />
                            )
                        })
                    }
                >
                    {set === "bg_color" && (
                        <Compact
                            className={s.colorPicker}
                            color={backgroundColor}
                            onChange={(c) => {
                                setBackgroundColor(c.hex)
                            }}
                        />
                    )}
                    {(set === "bg_image" || set === "bg_transparent") && (
                        <>
                            <div className={s.gridContainer}>
                                <Icon
                                    imgSrc={"/thumbs/upload.svg"}
                                    key={"custom"}
                                    id={"custom"}
                                    match={backgroundImage.name}
                                    onClick={() => customBgRef.current.click()}
                                />
                                <input
                                    ref={customBgRef}
                                    style={{display: "none"}}
                                    type="file"
                                    accept="image/*"
                                    onChange={(data) =>
                                        setBackgroundImage({
                                            data: data.target.files[0],
                                            name: "custom",
                                        })
                                    }
                                />
                                {bgSampleImages.map((img) => {
                                    return (
                                        <Icon
                                            imgSrc={img.path}
                                            key={img.name}
                                            id={img.name}
                                            match={backgroundImage.name}
                                            onClick={() => {
                                                setSet("bg_image")
                                                setBackgroundImage({
                                                    path: img.path,
                                                    name: img.name,
                                                    author: img.author,
                                                })
                                            }}
                                        />
                                    )
                                })}
                                <Icon
                                    imgSrc={'/thumbs/bg_transparent.svg'}
                                    onClick={() => {
                                        setSet('bg_transparent')
                                    }}
                                    match={set}
                                    id={'bg_transparent'}
                                />
                            </div>
                        </>
                    )}
                </Card>

                <Card
                    id="misc-container"
                    title="Misc"
                    src="pi pi-prime"
                >
                    <div className="flex justify-center items-center">
                        <Icon
                            title="Animation"
                            onClick={() => handleAnimation("animation_360")}
                            match={animation}
                            id="animation_360"
                            style={{margin: '10px', backgroundImage: 'url(/thumbs/rotate.svg)'}}
                        />
                        <Icon
                            title="Lights"
                            onClick={() => setLights(!lights)}
                            id="lights"
                            imgSrc={lights ? '/thumbs/bulb_off.svg' : '/thumbs/bulb_on.svg'}
                            style={{
                                margin: '10px',
                                backgroundColor: "white",
                            }}
                        />
                        <Icon
                            title="Props"
                            onClick={() => {
                                props === "prop_shapes" ? setProps(null) : setProps("prop_shapes")
                            }}
                            match={props}
                            id="prop_shapes"
                            style={{margin: '10px', backgroundImage: 'url(/thumbs/prop_shapes.png)'}}
                        />
                        <Icon
                            title="Props"
                            onClick={() => {
                                props === "prop_disco" ? setProps(null) : setProps("prop_disco")
                            }}
                            match={props}
                            id="prop_disco"
                            style={{margin: '10px', backgroundImage: 'url(/thumbs/prop_text.png)'}}
                        />
                    </div>
                </Card>

                <Card
                    id="size-container"
                    title="Size"
                    src="pi pi-arrows-alt"
                >
                    <div className="flex justify-center items-center">
                        <Icon
                            title="Small"
                            onClick={() => {
                                setSizeType("size_S")
                                setScale(0.95)
                            }}
                            match={sizeType}
                            id="size_S"
                            style={{margin: '10px'}}
                            textContent={"S"}
                        />
                        <Icon
                            title="Medium"
                            onClick={() => {
                                setSizeType("size_M")
                                setScale(1)
                            }}
                            match={sizeType}
                            id="size_M"
                            style={{margin: '10px'}}
                            textContent={"M"}
                        />
                        <Icon
                            title="Large"
                            onClick={() => {
                                setSizeType("size_L")
                                setScale(1.05)
                            }}
                            match={sizeType}
                            id="size_L"
                            style={{margin: '10px'}}
                            textContent={"L"}
                        />
                        <Icon
                            title="Extra Large"
                            onClick={() => {
                                setSizeType("size_XL")
                                setScale(1.1)
                            }}
                            match={sizeType}
                            id="size_XL"
                            style={{margin: '10px'}}
                            textContent={"XL"}
                        />
                    </div>
                </Card>


                <Card
                    id="decals-container"
                    title="Decals"
                    src="pi pi-th-large"
                    style={{gridColumn: 'span 2'}}
                >
                    <DecalManager/>
                </Card>

                <Card
                    id="text-container"
                    title="Text"
                    src="pi pi-pencil"
                    style={{gridColumn: 'span 2'}}
                >
                    <TextEditor setDecalPath={setDecalPath}/>
                </Card>
            </div>
        </div>
    )
}


