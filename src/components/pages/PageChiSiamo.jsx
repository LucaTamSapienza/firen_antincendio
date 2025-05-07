import Hero from '@/components/utils/Hero'

const PageChiSiamo = () => {
    return (
      <section className="w-full px-0 bg-white pb-10">
        {/* Banner Chi Siamo con componente riutilizzabile */}
        <Hero image="/images/chi-siamo-bg.jpeg" title="Chi Siamo" />

        {/* Sezione Chi Siamo */}
        <div className="w-full relative flex flex-col md:flex-row items-stretch justify-between bg-gray-900 overflow-hidden shadow-lg">
          {/* Immagine a destra con overlay */}
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <img
              src="/images/team.png"
              alt="Team Firen Antincendio"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
          </div>
          {/* Testo a sinistra */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-left relative z-10">
            <h3 className="text-3xl font-semibold text-white mb-6">La nostra storia</h3>
            <p className="text-lg text-gray-200 mb-4">
            Firen Antincendio opera nel settore della sicurezza antincendio da molti anni, offrendo esperienza e competenza grazie a un team altamente qualificato.
            </p>
            <p className="text-lg text-gray-200">
            Offriamo un servizio completo: dalla manutenzione ordinaria di estintori, alla progettazione e realizzazione di impianti di rilevazione antincendio, fino alla messa a norma di impianti elettrici.
            </p>
          </div>
        </div>
        </section>
        );
  };
export default PageChiSiamo;

