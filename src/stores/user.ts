import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let store = (set: any) => ({
  userInfo: null,
  userSettings: [],
  saveUserInfo: (info: any) => {
    set((state: any) => ({
      ...state,
      userInfo: info
    }))
  },
  saveUserSettings: (settings: any) => {
    set((state: any) => ({
      ...state,
      userSettings: settings
    }))
  }
})
// @ts-ignore
store = devtools(store) // Allow redux devtool debug
// @ts-ignore
store = persist(store, { name: 'user' }) // Persist to local storage

export default create(store)
