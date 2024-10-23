import Calculator from "@/components/widgets/calculator/Calculator";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Калькулятор",
  description: "Выполнено Герасименко Максимом Александровичем",
};

export default function CalculatorPage() {
  return (
    <main className={styles.main}>
      <Calculator />
    </main>
  );
}
