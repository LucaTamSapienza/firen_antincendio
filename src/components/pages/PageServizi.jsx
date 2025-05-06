import React from 'react'
import Hero from '@/components/utils/Hero'
import Link from 'next/link'

const servizi = [
  {
    label: 'Manutenzione',
    href: '/servizi/manutenzione',
    img: '/firen_antincendio/images/servizi/manutenzione.jpg',
    descrizione: `Ci occupiamo della manutenzione ordinaria e straordinaria di estintori, impianti e dispositivi antincendio, garantendo il rispetto delle normative e la massima efficienza dei sistemi di sicurezza. Il nostro servizio comprende controlli periodici, verifiche funzionali e rilascio delle certificazioni richieste per legge.`
  },
  {
    label: 'Installazione Porte Tagliafuoco',
    href: '/servizi/installazionePorteTagliafuoco',
    img: '/firen_antincendio/images/servizi/porte-tagliafuoco.jpg',
    descrizione: `Installiamo porte tagliafuoco certificate REI per la compartimentazione degli ambienti e la protezione delle vie di fuga. Offriamo soluzioni su misura, dalla consulenza alla posa in opera, con materiali di alta qualità e finiture personalizzate. Scopri tutti i dettagli e le normative di riferimento.`
  },
  {
    label: 'IRAI',
    href: '/servizi/irai',
    img: '/firen_antincendio/images/servizi/irai.jpg',
    descrizione: `Progettiamo e realizziamo impianti di Rilevazione Automatica di Incendio (IRAI) per una protezione tempestiva e affidabile di edifici civili e industriali. I nostri sistemi sono integrabili con evacuatori di fumo, allarmi sonori e impianti di spegnimento automatico.`
  },
  {
    label: 'Impianti Elettrici',
    href: '/servizi/impiantiElettrici',
    img: '/firen_antincendio/images/servizi/impianti-elettrici.jpg',
    descrizione: `Ci occupiamo della progettazione, realizzazione e messa a norma di impianti elettrici civili e industriali, con particolare attenzione alla sicurezza antincendio. Offriamo soluzioni innovative, efficienti e conformi alle normative vigenti.`
  },
];

const PageServizi = () => {
  return (
    <section className="w-full px-0 bg-white pb-10">
      <Hero image='/firen_antincendio/images/servizi.jpg' title="Servizi" />
      <div className="w-full py-12 px-0 space-y-20">
        {servizi.map((serv, idx) => (
          <div
            key={serv.label}
            className={`w-full flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center md:items-stretch gap-0 bg-gray-900 rounded-none shadow-lg overflow-hidden`}
          >
            <div className="w-full md:w-1/2 flex justify-center items-center p-6">
              <Link href={serv.href} className="block w-full max-w-md rounded-xl overflow-hidden shadow-lg group">
                <div className="relative w-full h-full">
                  <img
                    src={serv.img}
                    alt={serv.label}
                    className="object-cover w-full h-64 md:h-80 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-900">
              <Link href={serv.href} className="text-3xl font-bold text-white hover:text-red-400 transition-colors mb-4 block">
                {serv.label}
              </Link>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                {serv.descrizione}
              </p>
              <div className="mt-6">
                <Link href={serv.href}>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-colors duration-200">
                    Scopri di più
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PageServizi