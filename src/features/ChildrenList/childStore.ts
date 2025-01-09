import { create } from "zustand";

export type ChildStore = {
  selectedChild: string;
  setSelectedChild: (child: string) => void;
};

export const useChildStore = create<ChildStore>((set) => ({
  selectedChild: "",
  setSelectedChild: (child: string) => set({ selectedChild: child }),
}));
