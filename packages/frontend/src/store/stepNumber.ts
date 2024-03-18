import { create } from "zustand";

interface ActiveState {
  stepNumber: number;
  incStepNumber: () => void;
  decStepNumber: () => void;
}

export const useStepperNumber = create<ActiveState>((set) => ({
  stepNumber: 0,
  incStepNumber: () => set((prev) => ({ stepNumber: prev.stepNumber + 1 })),
  decStepNumber: () => set((prev) => ({ stepNumber: prev.stepNumber - 1 })),
}));
