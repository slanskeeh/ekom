import { generatePassword, PasswordState } from "@/helpers/generatePassword";
import { create } from "zustand";

export const usePasswordStore = create<PasswordState>((set) => ({
  length: 8,
  useUppercase: true,
  useLowercase: true,
  useNumbers: false,
  useSymbols: false,
  avoidDuplicates: false,
  generatedPasswords: [],
  setLength: (length) => set({ length }),
  toggleOption: (option) => set((state) => ({ [option]: !state[option] })),
  generatePasswords: () =>
    set((state) => ({
      generatedPasswords: Array(5)
        .fill(null)
        .map(() => generatePassword(state)),
    })),
}));
