import { create } from 'zustand'

interface ActiveState {
  isActiveGeneration: boolean
  setIsActiveGeneration: () => void
  isActiveSaved: boolean
  setIsActiveSaved: () => void
  isActiveFavorites: boolean
  setIsActiveFavorites: () => void
  isActiveSettings: boolean
  setIsActiveSettings: () => void
}

export const useNavbarDescription = create<ActiveState>()((set) => ({
  isActiveGeneration: false,
  setIsActiveGeneration: () => set((state) => ({ isActiveGeneration: !state.isActiveGeneration })),
  isActiveSaved: false,
  setIsActiveSaved: () => set((state) => ({ isActiveSaved: !state.isActiveSaved })),
  isActiveFavorites: false,
  setIsActiveFavorites: () => set((state) => ({ isActiveFavorites: !state.isActiveFavorites })),
  isActiveSettings: false,
  setIsActiveSettings: () => set((state) => ({ isActiveSettings: !state.isActiveSettings })),
}))