import Link from 'next/link';
import "../globals.css";
import styles from '../page.module.css';

export default function Contact() {
    return (
        <main className={styles.main}>
            <h1>Contact us</h1>
            <Link href={'/'}> Back to home</Link>
        </main>
    )
};