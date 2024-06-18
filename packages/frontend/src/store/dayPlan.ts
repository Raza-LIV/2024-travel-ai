import { create } from "zustand";
import { IDayPlan } from "../pages/Travel/Travel";

interface ActiveState {
  dayPlan: IDayPlan[];
  setDayPlan: (list: IDayPlan[]) => void;
}

export const usePlanDay = create<ActiveState>((set) => ({
  dayPlan: [],
  setDayPlan: (list: IDayPlan[]) => set(() => ({ dayPlan: list })),
}));
