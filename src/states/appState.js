import {create} from "zustand"

const useAppStore = create((set) => ({
	user: null,
	mode: null,
	isDarkMode: true,
	saved: {state: true, isUnSaved: true, name: '', desc: ''},
	setSaved: (data) => set((state) => ({...state, saved: data})),
	setMode: (mode) => set((state) => ({...state, mode})),
	setUser: (user) => set((state) => ({...state, user})),
	setDarkMode: (isDarkMode) => set((state) => ({...state, isDarkMode})),
}))

export default useAppStore
