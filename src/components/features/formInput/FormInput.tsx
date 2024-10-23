"use client";

import React, { ChangeEvent } from "react";
import styles from "./FormInput.module.scss";
import { IFormInput } from "./FormInput.types";

const FormInput = ({
  label,
  placeholder,
  setValue,
  inputValue,
  type = "text",
}: IFormInput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="input@" className={styles.label}>
        {label}
      </label>
      <input
        id="input@"
        type={type}
        value={inputValue}
        className={styles.input}
        placeholder={placeholder || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
