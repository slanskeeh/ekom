import React from "react";
import styles from "./Container.module.scss";
import { IContainer } from "./Container.types";

const Container = ({ className, children }: IContainer) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
