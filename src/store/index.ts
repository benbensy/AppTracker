import { create } from "zustand";
import { createAppSlice, AppSlice } from "./app-slice";
import { createUserSlice, UserSlice } from "./user-slice";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreState = AppSlice & UserSlice;

export const useBoundStore = create<StoreState>((...a) => ({
  ...createAppSlice(...a),
  ...persist(createUserSlice, {
    name: "user",
    storage: createJSONStorage(() => localStorage)
  })(...a),
}));
