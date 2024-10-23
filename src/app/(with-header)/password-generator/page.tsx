import PasswordGenerator from "@/components/widgets/passwordGenerator/PasswordGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Генератор паролей",
  description: "Выполнено Герасименко Максимом Александровичем",
};

export default function PassGeneratorPage() {
  return (
    <main>
      <PasswordGenerator />
    </main>
  );
}
