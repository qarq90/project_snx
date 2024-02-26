import {create} from "zustand";

const initialDecalSize = 0.2;

const useStore = create((set) => ({
    animation: null,
    backgroundColor: "#333333",
    backgroundImage: {
        data: null,
        name: null,
        path: null,
        author: {name: null, link: null},
    },
    isWriting: false,
    canvasSize: {name: "Choose format", width: 600, height: 600},
    decalImages: [],
    decalPath: null,
    decalName: null,
    decals: [],
    decalSize: initialDecalSize,
    gl: null,
    initialDecalSize: initialDecalSize,
    modelColor: "#ffffff",
    props: null,
    modelRotation: 0,
    sceneRef: null,
    set: "bg_color",
    text: "TEXT",
    loading: false,
    lights: true,
    scale: 1,
    sizeType: "size_M",
    setScale: (scale) => set((state) => ({...state, scale})),
    setSizeType: (type) => set((state) => ({...state, sizeType: type})),
    setLights: (lights) => set((state) => ({...state, lights})),
    setAnimation: (animation) => set((state) => ({...state, animation})),
    setIsWriting: (isWriting) => set((state) => ({...state, isWriting})),
    setLoading: (loading) => set((state) => ({...state, loading})),
    addDecal: (decalObject) =>
        set((state) => ({...state, decals: [...state.decals, decalObject]})),
    addDecalImages: (decal) =>
        set((state) => ({...state, decalImages: [...state.decalImages, decal]})),
    decrementDecalSize: (value) =>
        set((state) => ({...state, decalSize: state.decalSize - value})),
    incrementDecalSize: (value) =>
        set((state) => ({...state, decalSize: state.decalSize + value})),
    removeDecal: (decalKey) =>
        set((state) => ({
            ...state,
            decals: state.decals.filter((el) => el.key != decalKey),
        })),
    setDecals: (decals) => set((state) => ({...state, decals})),
    setBackgroundImage: ({data = null, name = null, path = null, author = null}) =>
        set((state) => ({
            ...state,
            backgroundImage: {data, name, path, author},
        })),
    setBackgroundColor: (color) => set((state) => ({...state, backgroundColor: color})),
    setDecalImages: (array) => set((state) => ({...state, decalImages: array})),
    setDecalPath: (decalPath) => set((state) => ({...state, decalPath})),
    setDecalName: (decalName) => set((state) => ({...state, decalName})),
    setDecalSize: (size) => set((state) => ({...state, decalSize: size})),
    setGl: (gl) => set((state) => ({...state, gl})),
    setCanvasSize: ({name, width, height}) =>
        set((state) => ({...state, canvasSize: {name, width, height}})),
    setModelColor: (color) => set((state) => ({...state, modelColor: color})),
    setSceneRef: (ref) => set((state) => ({...state, sceneRef: ref})),
    setProps: (name) => set((state) => ({...state, props: name})),
    setModelRotation: (rotation) => set((state) => ({...state, modelRotation: rotation})),
    setSet: (componentName) => set((state) => ({...state, set: componentName})),
    setText: (text) => set((state) => ({...state, text: `${text}`})),
    reset: () => set((state) => ({...initialValues})),
}));

export default useStore;

const initialValues = {
    animation: null,
    backgroundColor: "#333333",
    backgroundImage: {
        data: null,
        name: null,
        path: null,
        author: {name: null, link: null},
    },
    isWriting: false,
    canvasSize: {name: "Choose format", width: 600, height: 600},
    decalImages: [],
    decalPath: null,
    decalName: null,
    decals: [],
    decalSize: initialDecalSize,
    initialDecalSize: initialDecalSize,
    modelColor: "#ffffff",
    props: null,
    modelRotation: 0,
    sceneRef: null,
    set: "bg_color",
    text: "TEXT",
    loading: false,
    lights: true,
    scale: 1,
    sizeType: "size_M",
}