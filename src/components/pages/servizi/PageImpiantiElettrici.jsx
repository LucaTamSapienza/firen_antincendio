import React from 'react'
import Hero from '@/components/utils/Hero'

const PageImpiantiElettrici = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/images/servizi/impianti-elettrici.jpg" title="Impianti Elettrici" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/servizi/impianti-elettrici.jpg" alt="Impianti Elettrici" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impianti elettrici a norma</h2>
          <p className="text-gray-700 text-lg mb-4">
            Progettiamo, realizziamo e mettiamo a norma impianti elettrici civili e industriali, con particolare attenzione alla sicurezza antincendio. Offriamo soluzioni innovative, efficienti e conformi alle normative vigenti, garantendo affidabilità e assistenza completa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageImpiantiElettrici;