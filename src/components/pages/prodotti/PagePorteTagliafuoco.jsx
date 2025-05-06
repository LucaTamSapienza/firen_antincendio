import React from 'react'
import Hero from '@/components/utils/Hero'

const PagePorteTagliafuoco = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/images/prodotti/porta-tagliafuoco-image.png" title="Porte Tagliafuoco" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/prodotti/porta-tagliafuoco-image.png" alt="Porte Tagliafuoco" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Porte tagliafuoco certificate</h2>
          <p className="text-gray-700 text-lg mb-4">
            Le nostre porte tagliafuoco certificate REI sono disponibili in vari formati e finiture, con possibilità di personalizzazione e installazione a regola d’arte. Ideali per compartimentazione e sicurezza antincendio in ogni edificio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PagePorteTagliafuoco;