import Footer from "./components/footer/footer.component";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          So, You want to travel to SPACE
        </div>
      </main>
      <Footer />
    </>
  );
}
