import { StateCreator } from "zustand";

export type AppSlice = {
  appTitle: string;
  setAppTitle: (title: string) => void;
};

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
  appTitle: "",
  setAppTitle(title) {
    set({ appTitle: title });
  },
});
