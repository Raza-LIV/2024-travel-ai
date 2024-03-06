import { create } from "zustand";

interface ActiveState {
  isNavbarOpen: boolean;
  setIsNavbarOpen: () => void;
  setIsNavbarClose: () => void;
}

export const useNavbarActive = create<ActiveState>()((set) => ({
  isNavbarOpen: false,
  setIsNavbarOpen: () => set(() => ({ isNavbarOpen: true })),
  setIsNavbarClose: () => set(() => ({ isNavbarOpen: false })),
}));
