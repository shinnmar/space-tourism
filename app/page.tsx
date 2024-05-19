import Footer from "./components/footer/footer.component";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          So, You want to travel to <span>SPACE</span>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not-hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
