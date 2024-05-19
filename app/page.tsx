import Footer from "./components/footer/footer.component";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.columns}>
            <article>
              <p className={styles.hero_first_title}>
                So, You want to travel to
              </p>

              <br />
              <h1 className={styles.hero_title}>SPACE</h1>
              <p className={styles.hero_paragraph}>
                Let&apos;s face it; if you want to go to space, you might as
                well genuinely go to outer space and not-hover kind of on the
                edge of it. Well sit back, and relax because we&apos;ll give
                you a truly out of this world experience!
              </p>
            </article>
            <article>
              <div className={styles.circle}>
                <div className={styles.circle_text}>EXPLORE</div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
