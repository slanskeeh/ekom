"use client";

import useNameStore from "@/lib/zustand/nameStore";
import React, { useEffect, useState } from "react";
import styles from "./GreetingsForm.module.scss";
import FormInput from "@/components/features/formInput/FormInput";
import Button from "@/components/features/buttons/button/Button";
import ButtonCross from "@/components/features/buttons/buttonCross/ButtonCross";

const GreetingsForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { setName } = useNameStore();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    console.log(storedName);

    if (storedName) {
      setInputValue(storedName);
      setName(storedName);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setName(inputValue);
    localStorage.setItem("name", inputValue);

    console.log(localStorage.getItem("name"));
    //eslint-disable-next-line
  }, [inputValue]);

  return (
    <div className={styles.container}>
      <ButtonCross className={styles.cross} />
      <h2 className={styles.title}>Начать</h2>
      <form className={styles.form}>
        <FormInput
          label="Напишите ваше имя"
          placeholder="Ваше имя"
          inputValue={inputValue}
          setValue={setInputValue}
        />
      </form>
      <div className={styles.links}>
        <Button
          disabled={inputValue === ""}
          text="Открыть калькулятор"
          href="/calculator"
        />
        <Button
          disabled={inputValue === ""}
          text="Открыть генератор"
          href="/password-generator"
        />
      </div>
    </div>
  );
};

export default GreetingsForm;
