import React from 'react'
import Hero from '@/components/utils/Hero'

const PageSegnaletica = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/images/prodotti/segnaletica.png" title="Segnaletica" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/prodotti/segnaletica.png" alt="Segnaletica" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Segnaletica di sicurezza</h2>
          <p className="text-gray-700 text-lg mb-4">
            Forniamo segnaletica di sicurezza conforme alle normative UNI EN ISO 7010: cartelli per vie di fuga, estintori, divieti, obblighi e molto altro. Realizziamo anche segnaletica personalizzata per ogni ambiente, con materiali resistenti e visibili anche in condizioni di emergenza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegnaletica;