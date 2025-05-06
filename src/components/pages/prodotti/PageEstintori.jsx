import React from 'react'
import Hero from '@/components/utils/Hero'

const PageEstintori = () => {
  return (
    <section className="w-full bg-white pb-10">
      <Hero image="/firen_antincendio/images/prodotti/estintore.jpg" title="Estintori" />
      <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/firen_antincendio/images/prodotti/estintore.jpg" alt="Estintore" className="object-cover w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Estintori certificati</h2>
          <p className="text-gray-700 text-lg mb-4">
            I nostri estintori sono disponibili in diverse tipologie (a polvere, CO2, schiuma, idrici) e capacità, tutti certificati secondo le normative vigenti. Offriamo servizi di vendita, installazione, manutenzione periodica e ricarica, garantendo dispositivi sempre efficienti e pronti all’uso. Scegli la soluzione più adatta alle tue esigenze di sicurezza antincendio.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageEstintori