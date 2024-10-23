import { create } from "zustand";

export type CalculatorState = {
  topDisplay: string;
  bottomDisplay: string;
  currentNumber: string;
  operation: string | null;
  lastResult: string | null;
};

export type CalculatorStore = CalculatorState & {
  setTopDisplay: (value: string) => void;
  setBottomDisplay: (value: string) => void;
  setCurrentNumber: (value: string) => void;
  setOperation: (op: string | null) => void;
  setLastResult: (value: string | null) => void;
  clear: () => void;
  addDigit: (digit: string) => void;
  setDecimalPoint: () => void;
  toggleSign: () => void;
  percentage: () => void;
  setOperator: (op: string) => void;
  calculate: () => void;
  deleteLastChar: () => void;
};

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  topDisplay: "",
  bottomDisplay: "0",
  currentNumber: "0",
  operation: null,
  lastResult: null,
  setTopDisplay: (value) => set({ topDisplay: value }),
  setBottomDisplay: (value) => set({ bottomDisplay: value }),
  setCurrentNumber: (value) => set({ currentNumber: value }),
  setOperation: (op) => set({ operation: op }),
  setLastResult: (value) => set({ lastResult: value }),
  clear: () =>
    set({
      topDisplay: "",
      bottomDisplay: "0",
      currentNumber: "0",
      operation: null,
      lastResult: null,
    }),
  addDigit: (digit) =>
    set((state) => {
      const newNumber =
        state.currentNumber === "0" ? digit : state.currentNumber + digit;
      return { currentNumber: newNumber, bottomDisplay: newNumber };
    }),
  setDecimalPoint: () =>
    set((state) => {
      if (state.currentNumber.includes(".")) return {};
      const newNumber = state.currentNumber + ".";
      return { currentNumber: newNumber, bottomDisplay: newNumber };
    }),
  toggleSign: () =>
    set((state) => {
      const newNumber = state.currentNumber.startsWith("-")
        ? state.currentNumber.slice(1)
        : "-" + state.currentNumber;
      return { currentNumber: newNumber, bottomDisplay: newNumber };
    }),
  percentage: () =>
    set((state) => {
      const value = (parseFloat(state.currentNumber) / 100).toString();
      return { currentNumber: value, bottomDisplay: value };
    }),
  setOperator: (op) =>
    set((state) => {
      const newTopDisplay = state.lastResult
        ? `${state.lastResult} ${op}`
        : `${state.currentNumber} ${op}`;
      return {
        topDisplay: newTopDisplay,
        operation: op,
        lastResult: state.lastResult || state.currentNumber,
        currentNumber: "0",
        bottomDisplay: "0",
      };
    }),
  calculate: () =>
    set((state) => {
      if (!state.operation || !state.lastResult) return {};

      const num1 = parseFloat(state.lastResult);
      const num2 = parseFloat(state.currentNumber);
      let result = 0;

      switch (state.operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "×":
          result = num1 * num2;
          break;
        case "÷":
          result = num1 / num2;
          break;
      }

      const resultString = result.toString();
      return {
        topDisplay: `${state.lastResult} ${state.operation} ${state.currentNumber}`,
        bottomDisplay: resultString,
        currentNumber: resultString,
        lastResult: resultString,
        operation: null,
      };
    }),
  deleteLastChar: () =>
    set((state) => {
      if (state.currentNumber.length <= 1) {
        return { currentNumber: "0", bottomDisplay: "0" };
      }
      const newNumber = state.currentNumber.slice(0, -1);
      return { currentNumber: newNumber, bottomDisplay: newNumber };
    }),
}));
