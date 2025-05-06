import React from 'react'
import Hero from '@/components/utils/Hero'

const PageManutenzione = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/images/servizi/manutenzione.jpg" title="Manutenzione" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/servizi/manutenzione.jpg" alt="Manutenzione" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Manutenzione antincendio</h2>
          <p className="text-gray-700 text-lg mb-4">
            Ci occupiamo della manutenzione ordinaria e straordinaria di estintori, impianti e dispositivi antincendio, garantendo il rispetto delle normative e la massima efficienza dei sistemi di sicurezza. Il nostro servizio comprende controlli periodici, verifiche funzionali e rilascio delle certificazioni richieste per legge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageManutenzione;