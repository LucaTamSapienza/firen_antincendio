import Hero from '../utils/Hero'
import Link from 'next/link'

const prodotti = [
  {
    label: 'Estintori',
    href: '/prodotti/estintori',
    img: '/images/prodotti/estintore.jpg',
    descrizione: `I nostri estintori sono certificati secondo le normative vigenti e disponibili in diverse tipologie (a polvere, CO2, schiuma, ecc.) per ogni esigenza di sicurezza. Offriamo anche servizi di manutenzione, revisione e ricarica per garantire sempre la massima efficienza dei dispositivi antincendio. Clicca per scoprire tutte le soluzioni e i dettagli tecnici.`
  },
  {
    label: 'Segnaletica',
    href: '/prodotti/segnaletica',
    img: '/images/prodotti/segnaletica.png',
    descrizione: `Segnaletica di sicurezza personalizzata e conforme alle normative UNI EN ISO 7010. Realizziamo cartelli per vie di fuga, estintori, divieti, obblighi e molto altro, con materiali resistenti e visibili anche in condizioni di emergenza. Scopri tutte le tipologie disponibili.`
  },
  {
    label: 'Centrali di Rilevazione',
    href: '/prodotti/centraliDiRilevazione',
    img: '/images/prodotti/rilevazione2.png',
    descrizione: `Progettiamo e installiamo centrali di rilevazione fumo, calore e gas per ambienti civili e industriali. I nostri sistemi garantiscono un allarme tempestivo e sono integrabili con impianti di evacuazione e spegnimento automatico. Approfondisci le tecnologie e le soluzioni disponibili.`
  },
  {
    label: 'Maniglioni Antipanico',
    href: '/prodotti/maniglioniAntipanico',
    img: '/images/prodotti/maniglione-image.png',
    descrizione: `Maniglioni antipanico certificati per porte di emergenza, conformi alle normative europee. Offriamo modelli ad asta, a leva e soluzioni per ogni tipo di porta, con installazione professionale e assistenza post-vendita. Scopri tutte le opzioni e le caratteristiche tecniche.`
  },
  {
    label: 'Porte Tagliafuoco',
    href: '/prodotti/porteTagliafuoco',
    img: '/images/prodotti/porta-tagliafuoco-image.png',
    descrizione: `Porte tagliafuoco certificate REI per compartimentazione e sicurezza antincendio. Disponibili in vari formati e finiture, con possibilità di personalizzazione e installazione a regola d’arte. Consulta la gamma completa e le specifiche.`
  },
  {
    label: 'Illuminazione di Emergenza',
    href: '/prodotti/illuminazioneDiEmergenza',
    img: '/images/prodotti/illuminazione-image.png',
    descrizione: `Lampade e sistemi di illuminazione di emergenza per garantire la visibilità e la sicurezza in caso di blackout o evacuazione. Soluzioni a LED, autoalimentate e centralizzate, con installazione e manutenzione certificate. Scopri tutte le soluzioni disponibili.`
  },
];

const PageProdotti = () => {
  return (
    <section className="w-full px-0 bg-white pb-10">
      <Hero image='/images/prodotti.jpg' title="Prodotti" />
      <div className="w-full py-12 px-0 space-y-20">
        {prodotti.map((prod, idx) => (
          <div
            key={prod.label}
            className={`w-full flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center md:items-stretch gap-0 bg-gray-900 rounded-none shadow-lg overflow-hidden`}
          >
            <div className="w-full md:w-1/2 flex justify-center items-center p-6">
              <Link href={prod.href} className="block w-full max-w-md rounded-xl overflow-hidden shadow-lg group">
                <div className="relative w-full h-full">
                  <img
                    src={prod.img}
                    alt={prod.label}
                    className="object-cover w-full h-64 md:h-80 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-900">
              <Link href={prod.href} className="text-3xl font-bold text-white hover:text-red-400 transition-colors mb-4 block">
                {prod.label}
              </Link>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                {prod.descrizione}
              </p>
              <div className="mt-6"> {/* flex justify-center items-center */}
                <Link href={prod.href}>
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

export default PageProdotti