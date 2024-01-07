import Image from "next/image";
import styles from "./page.module.css";
import { UiHeader } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <UiHeader />
    </main>
  );
}
