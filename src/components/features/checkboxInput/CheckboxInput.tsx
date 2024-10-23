import React from "react";
import styles from "./CheckboxInput.module.scss";
import { ICheckboxInput } from "./CheckboxInput.types";

const CheckboxInput = ({ id, text, ...props }: ICheckboxInput) => {
  return (
    <div className={styles.container}>
      <input id={id} type="checkbox" {...props} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
    </div>
  );
};

export default CheckboxInput;
