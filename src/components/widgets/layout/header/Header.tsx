"use client";

import React from "react";
import styles from "./Header.module.scss";
import Container from "@/components/shared/containers/container/Container";
import useNameStore from "@/lib/zustand/nameStore";
import Link from "next/link";

const navLinksData = [
  {
    id: "1",
    name: "Название",
    href: "/",
  },
  {
    id: "2",
    name: "Главная",
    href: "/",
  },
  {
    id: "3",
    name: "Калькулятор",
    href: "/calculator",
  },
  {
    id: "4",
    name: "Название 3",
    href: "/",
  },
];

const Header = () => {
  const { name } = useNameStore();

  const navLinks = navLinksData.map((link) => (
    <li key={link.id} className={styles.nav_list_item}>
      <Link href={link.href}>{link.name}</Link>
    </li>
  ));

  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>{navLinks}</ul>
        </nav>
        <div className={styles.info}>
          <p className={styles.info_name}>{name}</p>
          <div className={styles.info_avatar}>{name.substring(0, 1)}</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
