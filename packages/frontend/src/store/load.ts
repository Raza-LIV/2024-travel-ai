import { create } from "zustand";

interface ActiveState {
  inProcess: boolean;
  setInProcess: (flag: boolean) => void;
}

export const useLoad = create<ActiveState>((set) => ({
  inProcess: false,
  setInProcess: (flag: boolean) => set(() => ({ inProcess: flag })),
}));
