/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.logo_icon}
          src="/images/logo.svg"
          alt="Space logo"
        />
      </div>
      <div className={styles.navigation}>
        <div className={styles.nav_content}>
          <a className={styles.nav_link} href="/">
            <span>00</span> Home
          </a>
          <a className={styles.nav_link} href="/destination">
            <span>01</span> Destination
          </a>
          <a className={styles.nav_link} href="/crew">
            <span>02</span> Crew
          </a>
          <a className={styles.nav_link} href="/technology">
            <span>03</span> Technology
          </a>
        </div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
}
