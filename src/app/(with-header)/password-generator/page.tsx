import PasswordGenerator from "@/components/widgets/passwordGenerator/PasswordGenerator";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Генератор паролей",
  description: "Выполнено Герасименко Максимом Александровичем",
};

export default function PassGeneratorPage() {
  return (
    <main className={styles.main}>
      <PasswordGenerator />
    </main>
  );
}
