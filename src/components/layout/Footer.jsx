import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="relative bg-gray-900 text-white py-10 px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/footer-bg.png')",
      }}
    >
      {/* Overlay sfumato */}
      <div className="absolute inset-0 bg-gray-800 opacity-85"></div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / About */}
        <div>
          <h2
            className="text-2xl font-bold"
            style={{
              background: 'linear-gradient(90deg, #AA180E, #AA180E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            FirenAntincendio
          </h2>
          <p className="text-sm mt-3 text-gray-400">
            Specialisti in sicurezza antincendio. Forniamo attrezzature, installazioni e manutenzione per garantire la protezione di persone e ambienti.
          </p>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contatti</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>📍 Via Vergemoli 16, Roma (RM)</li>
            <li>📞 06 83084988</li>
            <li>✉️ firen.info@gmail.com</li>
            <li>🕒 Lun - Ven: 8:30 - 18:00</li>
          </ul>
        </div>

        {/* Link Utili */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Link Utili</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <Link href="/chiSiamo" className="hover:text-white">Chi siamo</Link>
            </li>
            <li>
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
            </li>
            <li>
              <Link href="/prodotti" className="hover:text-white">Prodotti</Link>
            </li>
            <li>
              <Link href="/contatti" className="hover:text-white">Contatti</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Seguici</h3>
          <div className="flex space-x-4 text-gray-400">
            {/* TODO */}
            <a href="#"><i className="fab fa-facebook-f hover:text-white"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-white"></i></a>
            <a href="#"><i className="fab fa-linkedin-in hover:text-white"></i></a>
          </div>
        </div>
      </div>

      <div className="relative text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Firen Antincendio s.r.l. Tutti i diritti riservati.
        <span className="ml-10">P.Iva 13691091006</span>
      </div>
    </footer>
  )
}

export default Footer