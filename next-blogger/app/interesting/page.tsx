import "../globals.css";
import Link from 'next/link';
import styles from '../page.module.css';

export default function Interesting() {
    return (
        <main className={styles.main}>
            <h1>Interesting facts</h1>
            <Link href={'/'}> Back to home</Link>
        </main>
    )
};