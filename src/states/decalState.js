import {create} from "zustand"

const useDecalStore = create((set) => ({
    decalsData: [],
    addDecalData: (obj) => set((state) => ({...state, decalsData: [...state.decalsData, obj]})),
    removeDecalData: (decalKey) =>
        set((state) => ({
            ...state,
            decalsData: state.decalsData.filter((el) => el.key != decalKey),
        })),
    setDecalsData: (arr) => set((state) => ({...state, decalsData: arr})),
}))

export default useDecalStore
