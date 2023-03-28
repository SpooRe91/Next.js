import "./globals.css";
import Footer from "./common/Footer/layout";
import Header from "./common/Header/layout";

export const metadata = {
  title: "M.B. Blogger",
  description: "Blog site created by M.B.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
