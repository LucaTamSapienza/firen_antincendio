import Hero from '@/components/utils/Hero';
import React from 'react';

const IRAI = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/images/servizi/irai.jpg" title="IRAI - Impianti di Rilevazione Automatica Incendi" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/servizi/irai.jpg" alt="IRAI" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impianti di Rilevazione Automatica Incendi (IRAI)</h2>
          <p className="text-gray-700 text-lg mb-4">
            Progettiamo e realizziamo impianti di Rilevazione Automatica di Incendio (IRAI) per una protezione tempestiva e affidabile di edifici civili e industriali. I nostri sistemi sono integrabili con evacuatori di fumo, allarmi sonori e impianti di spegnimento automatico, garantendo la massima sicurezza e conformità alle normative.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IRAI;