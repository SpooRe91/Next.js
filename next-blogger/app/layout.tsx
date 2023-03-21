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
        <nav className="navbar">
          <div className="nav-container">
            <Link className="home-logo" href="/">M.B. Space<span>.</span></Link>
            <div className="nav-links-container" id="ftco-nav">
              <ul className="nav-ul" role='list'>
                <li className="nav-link"><Link href="/" className="nav-link">Home</Link></li>
                <li className="nav-link"><Link href="/planets" className="nav-link">Planets</Link></li>
                <li className="nav-link"><Link href="/interesting" className="nav-link">Interesting</Link></li>
                <li className="nav-link"><Link href="/about" className="nav-link">About</Link></li>
                <li className="nav-link"><Link href="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
