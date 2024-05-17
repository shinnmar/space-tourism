import Footer from "./components/footer/footer.component";
import styles from "./page.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}></div>
      </main>
      <Footer />
    </>
  );
}
