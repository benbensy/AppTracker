import { StateCreator } from "zustand";

export type UserSlice = {
  accessToken: string;
  setAccessToken: (token: string | null) => void;
};

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
    accessToken: "",
    setAccessToken(token) {
        set({ accessToken: token ?? "" });
    },
  });
