import { create } from "zustand";

interface ActiveState {
  chooseNo1: number;
  setChooseNo1: (num: number) => void;
  chooseYes1: number;
  setChooseYes1: (num: number) => void;
  chooseNo2: number;
  setChooseNo2: (num: number) => void;
  chooseYes2: number;
  setChooseYes2: (num: number) => void;
}

export const useChoice = create<ActiveState>((set) => ({
  chooseNo1: 0,
  chooseNo2: 0,
  chooseYes1: 0,
  chooseYes2: 0,
  setChooseNo1: (num: number) => set({ chooseNo1: num }),
  setChooseNo2: (num: number) => set({ chooseNo2: num }),
  setChooseYes1: (num: number) => set({ chooseYes1: num }),
  setChooseYes2: (num: number) => set({ chooseYes2: num }),
}));
