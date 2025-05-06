import React from 'react'
import Hero from '@/components/utils/Hero'

const PageCentraliRilevazione = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/firen_antincendio/images/prodotti/rilevazione2.png" title="Centrali di Rilevazione" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/firen_antincendio/images/prodotti/rilevazione2.png" alt="Centrali di Rilevazione" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Centrali di rilevazione fumo e gas</h2>
          <p className="text-gray-700 text-lg mb-4">
            Progettiamo e installiamo centrali di rilevazione fumo, calore e gas per ambienti civili e industriali. I nostri sistemi garantiscono un allarme tempestivo e sono integrabili con impianti di evacuazione e spegnimento automatico. Approfondisci le tecnologie e le soluzioni disponibili per la massima sicurezza.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageCentraliRilevazione