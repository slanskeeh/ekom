"use client";

import React, { useEffect, useState } from "react";
import styles from "./PasswordGenerator.module.scss";
import FormInput from "@/components/features/formInput/FormInput";
import CheckboxInput from "@/components/features/checkboxInput/CheckboxInput";
import Button from "@/components/features/buttons/button/Button";
import { usePasswordStore } from "@/lib/zustand/passGenStore";
import Container from "@/components/shared/containers/container/Container";

const PasswordGenerator = () => {
  const {
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols,
    avoidDuplicates,
    generatedPasswords,
    setLength,
    toggleOption,
    generatePasswords,
  } = usePasswordStore();
  const [inputValue, setInputValue] = useState<string>("");
  const [, setCopied] = useState<number | null>(null);

  useEffect(() => {
    if (parseInt(inputValue) && parseInt(inputValue) <= 32)
      setLength(parseInt(inputValue));
  }, [inputValue]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Container>
      <div className={styles.container}>
        <h1>Генератор паролей</h1>
        <div className={styles.generator}>
          <FormInput
            type="number"
            inputValue={inputValue}
            setValue={setInputValue}
            label="Длина пароля:"
            placeholder="Введите желаемую длину"
          />
          <div className={styles.generator_checkboxes}>
            <CheckboxInput
              text="Использовать прописные буквы"
              checked={useUppercase}
              id="uppercase"
              onChange={() => toggleOption("useUppercase")}
            />
            <CheckboxInput
              text="Использовать строчные буквы"
              checked={useLowercase}
              id="lowercase"
              onChange={() => toggleOption("useLowercase")}
            />
            <CheckboxInput
              text="Использовать цифры"
              checked={useNumbers}
              id="numbers"
              onChange={() => toggleOption("useNumbers")}
            />
            <CheckboxInput
              text="Использовать символы: %, *, ), ?, @, #, $, ~"
              checked={useSymbols}
              id="symbols"
              onChange={() => toggleOption("useSymbols")}
            />
            <CheckboxInput
              text="Избегать повторения символов"
              checked={avoidDuplicates}
              id="duplicates"
              onChange={() => toggleOption("avoidDuplicates")}
            />
          </div>
          <Button
            disabled={
              !(useLowercase || useUppercase || useNumbers || useSymbols)
            }
            text="Сгенерировать пароль"
            handler={generatePasswords}
          />
        </div>
        <div className={styles.results}>
          {generatedPasswords.map((password, index) => (
            <div key={index} className={styles.results_item}>
              <span>{password}</span>
              <button
                onClick={() => copyToClipboard(password, index)}
                className={styles.copy}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9219 0.390015C23.1406 0.390015 24.1719 1.42126 24.1719 2.64001V16.14C24.1719 17.4056 23.1406 18.39 21.9219 18.39H8.42188C7.15625 18.39 6.17188 17.4056 6.17188 16.14V2.64001C6.17188 1.42126 7.15625 0.390015 8.42188 0.390015H21.9219ZM8.42188 19.89H18.1719V22.14C18.1719 23.4056 17.1406 24.39 15.9219 24.39H2.42188C1.15625 24.39 0.171875 23.4056 0.171875 22.14V8.64001C0.171875 7.42126 1.15625 6.39001 2.42188 6.39001H4.67188V16.14C4.67188 18.2494 6.3125 19.89 8.42188 19.89Z"
                    fill="#3B75A2"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PasswordGenerator;
