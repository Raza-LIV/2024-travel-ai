import { create } from "zustand";

interface ActiveState {
  contentNumber: number;
  setContentNumber: (num: number) => void;

  isDateChanged: boolean;
  isDurationChanged: boolean;
  isFoodChanged: boolean;
  isArtChanged: boolean;
  setIsDateChanged: (flag: boolean) => void;
  setIsDurationChanged: (flag: boolean) => void;
  setIsFoodChanged: (flag: boolean) => void;
  setIsArtChanged: (flag: boolean) => void;
}

export const useModalContent = create<ActiveState>((set) => ({
  contentNumber: 0,
  setContentNumber: (num) => set(() => ({ contentNumber: num })),

  isDateChanged: false,
  isDurationChanged: false,
  isFoodChanged: false,
  isArtChanged: false,
  setIsDateChanged: (flag: boolean) => set(() => ({ isDateChanged: flag })),
  setIsDurationChanged: (flag: boolean) =>
    set(() => ({ isDurationChanged: flag })),
  setIsFoodChanged: (flag: boolean) => set(() => ({ isFoodChanged: flag })),
  setIsArtChanged: (flag: boolean) => set(() => ({ isArtChanged: flag })),
}));
