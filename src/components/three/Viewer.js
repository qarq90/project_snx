import {invalidate} from "@react-three/fiber"
import React, {Suspense, useEffect, useRef, useState} from "react"
import {useSpring} from "@react-spring/three"
import * as THREE from "three"
import useStore from "../../states/modelState"
import Hotkeys from "../hotkeys/Hotkeys"
import CanvasBackground from "./canvasBackground/CanvasBackground"
import DecalHelper from "./DecalHelper"
import ShirtModel from "./ShirtModel"
import Scenes from "./Scenes"
import {CreateCanvasWrapper, LoadingOverlay, SavingScreen, SavePopup, SavePopupFooter} from "@/styles/styledCreate";
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {Button} from "primereact/button";
import {SplitButton} from "primereact/splitbutton";
import {ConfirmPopup, confirmPopup} from "primereact/confirmpopup";
import {Toast} from "primereact/toast";
import {showToast} from "@/lib/helper";
import useAppStore from "@/states/appState";
import {Dialog} from "primereact/dialog";
import useDecalStore from "@/states/decalState";
import {usePathname} from "next/navigation";
import PantModel from "@/components/three/PantModel";
import ShoeModel from "@/components/three/ShoeModel";
import {process_image} from "@/lib/imageUtils";
import {createDecal} from "@/components/three/Decals";
import {Loader} from "@react-three/drei";
import CapModel from "@/components/three/CapModel";

const Viewer = ({mode, DD, modelUrl}) => {
    const [modelRayData, setModelRayData] = useState(null)
    const [azimuthPose, setAzimuthPose] = useState(0)
    const [polarPose, setPolarPose] = useState(0)
    const [dpr, setDpr] = useState(2)
    const groupRef = useRef(null)
    const modelRef = useRef(null)
    const {user} = useAppStore()
    const pathname = usePathname()
    const isShirt = pathname.includes('/shirt')
    const isPant = pathname.includes('/pant')
    const isShoe = pathname.includes('/shoes')
    const isCap = pathname.includes('/cap')

    const {
        animation,
        backgroundColor,
        backgroundImage,
        isWriting,
        decalImages,
        decalPath,
        decalName,
        decals,
        decalSize,
        gl,
        addDecal,
        addDecalImages,
        modelColor,
        modelRotation,
        sceneRef,
        set,
        setIsWriting,
        decrementDecalSize,
        incrementDecalSize,
        loading,
        setLoading,
        setDecals,
        setDecalImages,
        setGl,
        scale,
        sizeType,
        reset
    } = useStore();

    const {decalsData, setDecalsData} = useDecalStore()
    const {saved, setSaved} = useAppStore()

    useEffect(() => {
        if (modelRef.current === null) return;
        if (modelRef.current) {
            console.log('Model reference is now available')
        }
        decalsData.map((dec) => {
            new THREE.TextureLoader().load(dec.texture, (decalTexture) => {
                const {x: x1, y: y1, z: z1} = dec.position
                const {x: x2, y: y2, z: z2} = dec.normal

                const {decal, key} = createDecal(
                    modelRef.current, // Geometry
                    new THREE.Vector3(x1, y1, z1), // Position
                    new THREE.Vector3(x2, y2, z2), // Normal
                    decalTexture, // Texture
                    dec.size // Size of longest side
                )

                // Add decal to decal manager
                addDecalImages({path: dec.texture, name: dec.textureName, key: key})

                // Add decal to state
                addDecal({mesh: decal, key: key})
            })
        })
        // setDecalsData([])
    }, [modelRef.current])

    // KEYDOWN
    useEffect(() => {
        function handleKeyDownEvent(e) {
            const {key} = e
            if (!animation && !decalPath && !isWriting) {
                if (key === "ArrowLeft") {
                    setAzimuthPose((prev) => (prev - 90))
                }
                if (key === "ArrowRight") {
                    setAzimuthPose((prev) => (prev + 90))
                }
                if (key === "ArrowUp") {
                    setPolarPose((prev) => (prev - 90))
                }
                if (key === "ArrowDown") {
                    setPolarPose((prev) => (prev + 90))
                }
                key === "r" && setAzimuthPose((prev) => (prev + 90)) //setModelFlipped((prev) => (prev ? false : true))
            }
            if (decalPath && !isWriting) {
                e.preventDefault() // prevent arrow scrolling
                key === "ArrowUp" && incrementDecalSize(0.01)
                key === "ArrowDown" && decrementDecalSize(0.01)
            }
        }

        function handleMouseWheelEvent(event) {
            if (!decalPath) return

            if (event.deltaY < 0) {
                incrementDecalSize(0.01)
            } else if (event.deltaY > 0) {
                decrementDecalSize(0.01)
            }
        }

        document.addEventListener('wheel', handleMouseWheelEvent);
        document.addEventListener("keydown", handleKeyDownEvent)
        return () => {
            document.removeEventListener("keydown", handleKeyDownEvent)
            document.removeEventListener('wheel', handleMouseWheelEvent);
        }
    }, [isWriting, decalPath, animation, azimuthPose]) //eslint-disable-line

    // FLIP ANIMATION
    const flipModelAnimation = useSpring({
        config: {tension: 300, mass: 1.3},
        rotation: [THREE.MathUtils.degToRad(polarPose), THREE.MathUtils.degToRad(azimuthPose), 0],
        onChange: () => invalidate(),
    })

    const exporter = new GLTFExporter();
    const link = useRef();
    const toastRef = useRef();

    function save(blob, filename) {
        link.current.href = URL.createObjectURL(blob);
        link.current.download = filename;
        link.current.click();
    }

    const exportScene = () => {
        exporter.parse(groupRef.current, (result) => {
            if (result instanceof ArrayBuffer) {
                save(new Blob([result], {type: 'application/octet-stream'}), 'model.glb');
            } else {
                const output = JSON.stringify(result, null, 2);
            }
        }, (err) => {
            console.error(err.message)
        }, {
            binary: true, onlyVisible: true
        });
    };

    const items = [
        {
            label: 'Export as Png', id: "export-pic-button", icon: 'pi pi-image', command: () => {
                const imgData = gl.domElement.toDataURL("image/png")
                const a = document.createElement("a");

                a.setAttribute("download", "")
                a.setAttribute("href", imgData)
                a.click()

                showToast("success", "Exported as Png", "Scene has been exported as png", toastRef)
            }
        }, {
            label: 'Export as Glb', id: "export-model-button", icon: 'pi pi-box', command: () => {
                exportScene()
                showToast("success", "Exported as GLB", "Scene has been exported as glb", toastRef)
            }
        },];

    const handleReset = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            rejectClass: 'p-button-sm',
            acceptClass: 'p-button-outlined p-button-sm',
            accept: () => {
                showToast("info", "Scene Reset", "Scene has been reset", toastRef)
                reset()
            },
            reject: () => console.log()
        });
    }

    const handleSaveBtnClick = () => {
        if (saved.state) return;
        if (saved.isUnSaved) {
            setDialogVisible(true);
            return;
        }
        handleSave().then()
    }

    const handleSave = async () => {
        setIsWriting(true)
        if (!saved.name) {
            showToast("error", "Save Failed", "Model name and description are required", toastRef)
            setSaved({...saved, state: false, isUnSaved: true})
            setIsWriting(false)
            return;
        }
        if (saved.isUnSaved) {
            const res = await fetch('/api/post/save-model/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: saved.name,
                    username: saved.name
                })
            })

            const data = await res.json()

            if (data.exists) {
                showToast("error", "Save Failed", "Model name already taken", toastRef)
                setSaved({...saved, state: false, isUnSaved: true})
                return;
            }
        }

        const imgData = gl.domElement.toDataURL("image/png")
        const snapshot = await process_image(imgData)
        const pathParts = pathname.split('/');
        const modelType = pathParts[3];
        const savedItems = {
            backgroundColor,
            decalsData,
            modelColor,
            email: localStorage.getItem("user"),
            name: saved.name,
            desc: saved.desc,
            sizeType,
            scale,
            snapshot,
            modelType
        }
        setSaved({...saved, state: true, isUnSaved: false})
        setLoading(true)
        setDialogVisible(false);

        const res = await fetch('/api/post/save-model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({savedObj: savedItems})
        })

        const data = await res.json()
        setLoading(false)
        setIsWriting(false)
        showToast("success", "Saved", "Model has been saved", toastRef)
        setSaved({...saved, state: true, isUnSaved: false})
    }

    useEffect(() => {
        if (saved.isUnSaved) {
            setSaved({...saved, state: false, isUnSaved: true})
        } else {
            setSaved({...saved, state: false, isUnSaved: false})
        }
    }, [backgroundColor, backgroundImage, decalImages, decalPath, decalName, decals, gl, modelColor, modelRotation, sceneRef, set, sizeType]);

    const [dialogVisible, setDialogVisible] = useState(false);

    const footerContent = (<SavePopupFooter>
        <div className="btn-cancel">
            <Button label="Cancel" onClick={() => setDialogVisible(false)}/>
        </div>
        <div className="btn-ok">
            <Button label="Save" onClick={handleSave}/>
        </div>
    </SavePopupFooter>);

    return (
        <CanvasBackground>
            {loading && (<>
                <LoadingOverlay/>
                <SavingScreen>
                    <div>
                        <img src="/loading.gif" alt=""/>
                    </div>
                </SavingScreen>
            </>)}
            <Hotkeys/>
            <Toast ref={toastRef}/>
            <ConfirmPopup/>
            <Dialog visible={dialogVisible} modal header={"Save Model"} footer={footerContent}
                    style={{width: '30rem', zIndex: 10000}}
                    onHide={() => setDialogVisible(false)}>
                <SavePopup>
                    <div>
                        <label>
                            Model Name:
                        </label>
                        <input type="text" onChange={(event) => setSaved({...saved, name: event.target.value})}/>
                        <label>
                            Model Desc:
                        </label>
                        <input type="text" onChange={(event) => setSaved({...saved, desc: event.target.value})}/>
                    </div>
                </SavePopup>
            </Dialog>
            <div className="export-glb-div">
                <a href="" ref={link}></a>
                <Button id="save-button" label={"Save" + (saved.state ? "" : "*")} icon={"pi pi-save"}
                        onClick={handleSaveBtnClick} raised>
                </Button>
                <SplitButton id="export-container" label={"Export"} icon={"pi pi-file-export"} model={items}
                             onClick={async () => {
                             }} raised/>
                <Button id="reset-button" label={"Reset"} icon={"pi pi-eraser"} onClick={handleReset} raised/>
            </div>
            <CreateCanvasWrapper
                camera={{position: [0, 0, 2.2], fov: 50}}
                dpr={dpr}
                frameloop="demand"
                gl={{preserveDrawingBuffer: true}}
                raycaster={{far: 3.5}}
                onCreated={(state) => setGl(state.gl)}
                shadows
                style={{cursor: decalPath ? "none" : "auto", backgroundColor: "#101010"}}
            >
                <DecalHelper modelRayData={modelRayData} size={decalSize}/>
                <Suspense fallback={null}>
                    {
                        isShirt &&
                        <ShirtModel
                            modelRef={modelRef}
                            groupRef={groupRef}
                            url={modelUrl}
                            rotation={flipModelAnimation.rotation}
                            setModelRayData={setModelRayData}
                        />
                    }
                    {
                        isPant &&
                        <PantModel
                            modelRef={modelRef}
                            groupRef={groupRef}
                            url={modelUrl}
                            rotation={flipModelAnimation.rotation}
                            setModelRayData={setModelRayData}
                        />
                    }
                    {
                        isShoe &&
                        <ShoeModel
                            modelRef={modelRef}
                            groupRef={groupRef}
                            url={modelUrl}
                            rotation={flipModelAnimation.rotation}
                            setModelRayData={setModelRayData}
                        />
                    }
                    {
                        isCap &&
                        <CapModel
                            modelRef={modelRef}
                            groupRef={groupRef}
                            url={modelUrl}
                            rotation={flipModelAnimation.rotation}
                            setModelRayData={setModelRayData}
                        />
                    }
                </Suspense>
                <Scenes/>
            </CreateCanvasWrapper>
            <Loader/>
        </CanvasBackground>)
}

export default Viewer