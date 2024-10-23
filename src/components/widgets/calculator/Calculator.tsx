"use client";

import React, { useEffect } from "react";
import styles from "./Calculator.module.scss";
import { useCalculatorStore } from "@/lib/zustand/calculatorStore";
import ButtonCalculator from "@/components/features/buttons/buttonCalculator/ButtonCalculator";

const Calculator = () => {
  const {
    topDisplay,
    bottomDisplay,
    addDigit,
    clear,
    setDecimalPoint,
    toggleSign,
    percentage,
    setOperator,
    calculate,
    deleteLastChar,
  } = useCalculatorStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "0" && event.key <= "9") {
        addDigit(event.key);
      } else if (event.key === ".") {
        setDecimalPoint();
      } else if (event.key === "+" || event.key === "-") {
        setOperator(event.key);
      } else if (event.key === "*") {
        setOperator("×");
      } else if (event.key === "/") {
        setOperator("÷");
      } else if (event.key === "Enter" || event.key === "=") {
        calculate();
      } else if (event.key === "Backspace") {
        deleteLastChar();
      } else if (event.key === "Escape") {
        clear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    addDigit,
    setDecimalPoint,
    setOperator,
    calculate,
    deleteLastChar,
    clear,
  ]);

  return (
    <div className={styles.calc}>
      <div className={styles.results}>
        <p className={styles.results_previous}>{topDisplay}</p>
        <p className={styles.results_current}>{bottomDisplay}</p>
      </div>
      <div className={styles.board}>
        <ButtonCalculator variant="secondary" onClick={clear}>
          C
        </ButtonCalculator>
        <ButtonCalculator variant="secondary" onClick={toggleSign}>
          +/-
        </ButtonCalculator>
        <ButtonCalculator variant="secondary" onClick={percentage}>
          %
        </ButtonCalculator>
        <ButtonCalculator variant="primary" onClick={() => setOperator("÷")}>
          ÷
        </ButtonCalculator>

        <ButtonCalculator variant="ghost" onClick={() => addDigit("7")}>
          7
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("8")}>
          8
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("9")}>
          9
        </ButtonCalculator>
        <ButtonCalculator variant="primary" onClick={() => setOperator("×")}>
          ×
        </ButtonCalculator>

        <ButtonCalculator variant="ghost" onClick={() => addDigit("4")}>
          4
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("5")}>
          5
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("6")}>
          6
        </ButtonCalculator>
        <ButtonCalculator variant="primary" onClick={() => setOperator("-")}>
          -
        </ButtonCalculator>

        <ButtonCalculator variant="ghost" onClick={() => addDigit("1")}>
          1
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("2")}>
          2
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("3")}>
          3
        </ButtonCalculator>
        <ButtonCalculator variant="primary" onClick={() => setOperator("+")}>
          +
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={setDecimalPoint}>
          .
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={() => addDigit("0")}>
          0
        </ButtonCalculator>
        <ButtonCalculator variant="ghost" onClick={deleteLastChar}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5858 7.00002H11H27H28V8.00002V24V25H27H11H10.5858L10.2929 24.7071L2.29292 16.7071L1.58582 16L2.29292 15.2929L10.2929 7.29291L10.5858 7.00002ZM11.4142 9.00002L4.41424 16L11.4142 23H26V9.00002H11.4142ZM15 11.5858L15.7071 12.2929L18 14.5858L20.2929 12.2929L21 11.5858L22.4142 13L21.7071 13.7071L19.4142 16L21.7071 18.2929L22.4142 19L21 20.4142L20.2929 19.7071L18 17.4142L15.7071 19.7071L15 20.4142L13.5858 19L14.2929 18.2929L16.5858 16L14.2929 13.7071L13.5858 13L15 11.5858Z"
              fill="black"
            />
          </svg>
        </ButtonCalculator>

        <ButtonCalculator variant="primary" onClick={calculate}>
          =
        </ButtonCalculator>
      </div>
    </div>
  );
};

export default Calculator;
