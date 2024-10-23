import React from "react";
import styles from "./ButtonCalculator.module.scss";
import { IButtonCalculator } from "./ButtonCalculator.types";

const ButtonCalculator = ({
  variant,
  children,
  onClick,
}: IButtonCalculator) => {
  return (
    <button data-variant={variant} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCalculator;
