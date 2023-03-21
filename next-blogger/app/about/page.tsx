import "../globals.css";
import Link from 'next/link';
import styles from './styles.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <h1> ABOUT </h1>
            <p className={styles.description}>Here you can find a bit of information about M.B. and what he does.</p>
            <Link href={'/'}>Back to home</Link>
        </main>
    )
};