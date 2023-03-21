import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles['main-container']}>
        <h1>Space Blogger by M.B.</h1>

      </div>
    </main>
  )
}
