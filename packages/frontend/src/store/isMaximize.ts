import { create } from "zustand";

interface ActiveState {
  isMaximize: boolean;
  setIsMaximize: (flag: boolean) => void;
}

export const useMaximize = create<ActiveState>((set) => ({
  isMaximize: false,
  setIsMaximize: (flag: boolean) => set(() => ({ isMaximize: flag })),
}));
