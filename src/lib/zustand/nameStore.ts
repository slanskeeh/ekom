import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NameStore {
  name: string;
  setName: (name: string) => void;
}

const useNameStore = create<NameStore>()(
  persist(
    (set) => ({
      name: "",
      setName: (name) => set({ name }),
    }),
    {
      name: "name-storage",
    }
  )
);

export default useNameStore;
