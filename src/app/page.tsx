"use client";

import React from "react";
import styles from "./page.module.scss";
import useBodyClass from "@/hooks/useBodyClass";

const Home: React.FC = () => {
  useBodyClass("homePage");
  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <div className="container">
          <div className={styles.columns}>
            <article className={styles.left}>
              <p className={styles.hero_first_title}>
                So, You want to travel to
              </p>
              <br />
              <h1 className={styles.hero_title}>SPACE</h1>
              <p className={styles.hero_paragraph}>
                Let&apos;s face it; if you want to go to space, you might as
                well genuinely go to outer space and not-hover kind of on the
                edge of it. Well sit back, and relax because we&apos;ll give you
                a truly out of this world experience!
              </p>
            </article>
            <article className={styles.right}>
              <div className={styles.circle}>
                <div className={styles.circle_text}>EXPLORE</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
