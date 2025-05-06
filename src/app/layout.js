import "./globals.css";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'Firen Antincendio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-...." // Replace with actual integrity hash
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow pt-30">
          {children}
        </main>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}