import { create } from "zustand";

interface ActiveState {
  isModalVisible: boolean;
  setIsModalVisible: (state: boolean) => void;
  requestIndex: number;
  setRequestIndex: (index: number) => void;
}

export const useTravelModal = create<ActiveState>((set) => ({
  isModalVisible: false,
  setIsModalVisible: (state: boolean) => set({ isModalVisible: state }),
  requestIndex: -1,
  setRequestIndex: (index: number) => set({ requestIndex: index }),
}));
