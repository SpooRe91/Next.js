import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["navbar"]}>
        <ul className={styles["nav-ul"]} role="list">
          <li className={styles["nav-li"]}>
            <Link href="/" className={styles["nav-link"]}>
              Home
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link href="/planets" className={styles["nav-link"]}>
              Planets
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link href="/interesting" className={styles["nav-link"]}>
              Interesting
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link href="/about" className={styles["nav-link"]}>
              About
            </Link>
          </li>
          <li className={styles["nav-li"]}>
            <Link href="/contact" className={styles["nav-link"]}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
