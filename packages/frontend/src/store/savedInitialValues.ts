import { create } from "zustand";

interface ActiveState {
  savedFood: boolean | null;
  savedArt: boolean | null;
  savedDuration: number | null;
  setSavedFood: (flag: boolean | null) => void;
  setSavedArt: (flag: boolean | null) => void;
  setSavedDuration: (days: number | null) => void;
}

export const useSavedValues = create<ActiveState>((set) => ({
  savedFood: null,
  savedArt: null,
  savedDuration: null,
  setSavedFood: (flag: boolean | null) => set(() => ({ savedFood: flag })),
  setSavedArt: (flag: boolean | null) => set(() => ({ savedArt: flag })),
  setSavedDuration: (days: number | null) =>
    set(() => ({ savedDuration: days })),
}));
