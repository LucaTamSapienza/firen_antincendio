import "./globals.css";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/layout/Footer";


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
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow pt-30"> {/* pt-20 */}
          {children}
        </main>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
