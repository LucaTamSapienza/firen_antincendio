import React from 'react'
import Hero from '@/components/utils/Hero'

const PageinstallazionePorteTagliafuoco = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/firen_antincendio/images/servizi/porte-tagliafuoco.jpg" title="Installazione Porte Tagliafuoco" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/firen_antincendio/images/servizi/porte-tagliafuoco.jpg" alt="Installazione Porte Tagliafuoco" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Installazione porte tagliafuoco certificate</h2>
          <p className="text-gray-700 text-lg mb-4">
            Installiamo porte tagliafuoco certificate REI per la compartimentazione degli ambienti e la protezione delle vie di fuga. Offriamo soluzioni su misura, dalla consulenza alla posa in opera, con materiali di alta qualità e finiture personalizzate. Scopri tutti i dettagli e le normative di riferimento per la sicurezza antincendio.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageinstallazionePorteTagliafuoco