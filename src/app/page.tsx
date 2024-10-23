import GreetingsForm from "@/components/widgets/greetingsForm/GreetingsForm";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <GreetingsForm />
    </main>
  );
}
