/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socialMedia}>
          <a className={styles.github}>Made by Shinnmar</a>
        </div>
      </div>
    </footer>
  );
}
