import React from 'react'
import Hero from '@/components/utils/Hero'

const PageManiglioniAntipanico = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/firen_antincendio/images/prodotti/maniglione-image.png" title="Maniglioni Antipanico" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/firen_antincendio/images/prodotti/maniglione-image.png" alt="Maniglioni Antipanico" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maniglioni antipanico certificati</h2>
          <p className="text-gray-700 text-lg mb-4">
            Offriamo maniglioni antipanico certificati per porte di emergenza, conformi alle normative europee. Disponibili modelli ad asta, a leva e soluzioni per ogni tipo di porta, con installazione professionale e assistenza post-vendita.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageManiglioniAntipanico