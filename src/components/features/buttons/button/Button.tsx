import React from "react";
import styles from "./Button.module.scss";
import { IButton } from "./Button.types";
import Link from "next/link";

const Button = ({ text, href, handler, width, disabled = false }: IButton) => {
  return href ? (
    <Link
      data-disabled={disabled}
      data-width={width}
      href={href}
      className={`${styles.common} ${styles.link}`}
      onClick={handler}
    >
      {text}
    </Link>
  ) : (
    <button
      disabled={disabled}
      data-width={width}
      className={`${styles.common} ${styles.button}`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
