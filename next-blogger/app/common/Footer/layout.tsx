import Link from "next/link";
import styles from "./footer.module.css";
import { FaDev, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <footer className={styles["footer-distributed"]}>
        <div className={styles["footer-right"]}>
          <Link
            href="https://github.com/SpooRe91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/mbogdanov9110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://dev.to/spoore91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev />
          </Link>
        </div>

        <div className={styles["footer-left"]}>
          <p className={styles["footer-links"]}>
            <Link className={styles["link-1"]} href="/">
              Home
            </Link>
            <Link href="#">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="#">Faq</Link>
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </footer>
    </footer>
  );
}
