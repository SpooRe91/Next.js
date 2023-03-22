import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'M.B. Blogger',
  description: 'Blog site created by M.B.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="nav-container">
          <nav className="navbar">
            <ul className="nav-ul" role='list'>
              <li className="nav-li"><Link href="/" className="nav-link">Home</Link></li>
              <li className="nav-li"><Link href="/planets" className="nav-link">Planets</Link></li>
              <li className="nav-li"><Link href="/interesting" className="nav-link">Interesting</Link></li>
              <li className="nav-li"><Link href="/about" className="nav-link">About</Link></li>
              <li className="nav-li"><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
