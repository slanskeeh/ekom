import React from "react";
import styles from "./ButtonCross.module.scss";
import { IButtonCross } from "./ButtonCross.types";

const ButtonCross = ({ handler, className }: IButtonCross) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={handler}
    ></button>
  );
};

export default ButtonCross;
