'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Homepage = () => {
  return ( 
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      {/* Hero */}
      <motion.section
        className="w-full relative h-[400px] md:h-[1000px] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: "url('/firen_antincendio/images/homepage-bg.png')",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeVariants}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div className="relative z-10 w-full flex justify-end items-center h-full px-4 md:px-12">
          <div className="max-w-xl text-right text-white absolute top-8 right-2 md:top-32 md:right-12 z-10">
            <h2 className="font-bold mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              <span
                className="block leading-none"
                style={{
                  letterSpacing: '0.02em',
                }}
              >
                <span className="block text-8xl xs:text-7xl sm:text-8xl md:text-[10rem]" style={{ lineHeight: 1 }}>
                  FIREN
                </span>
              </span>
              <span
                className="block"
                style={{
                  letterSpacing: '0.02em',
                  width: '100%',
                  display: 'inline-block',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    fontFamily: "'League Spartan', sans-serif",
                    fontWeight: 'bold',
                    transform: 'scaleX(1.26)',
                    transformOrigin: 'right',
                  }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem]"
                >
                  ANTINCENDIO S.r.l.
                </span>
              </span>
            </h2>
            {/* <p className="mt-2 text-base xs:text-lg md:text-2xl font-medium text-gray-200">Proteggi ciò che conta.</p> */}
          </div>
        </div>
      </motion.section>

      {/* Sezione Chi Siamo */}
      <motion.section
        className="w-full py-16 px-0 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="w-full flex flex-col md:flex-row items-stretch justify-between bg-gray-800 overflow-hidden shadow-lg">
          {/* Testo a sinistra */}
          <motion.div
            className="w-full md:w-1/2 p-8 flex flex-col justify-center text-left relative z-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-5xl font-semibold text-white text-left mx-auto">Chi Siamo</h1>
            <p className="mt-4 text-lg text-gray-200 text-center mx-auto max-w-2xl">
              Firen Antincendio è un'azienda leader nel settore della sicurezza antincendio, con anni di esperienza e un team altamente qualificato.<br />
              Offriamo un servizio completo: dalla manutenzione ordinaria di estintori, alla progettazione e realizzazione di impianti di rilevazione antincendio, fino alla messa a norma di impianti elettrici.
            </p>
            <Link href="/chiSiamo" passHref>
              <button
                className="mt-4 mx-auto font-semibold px-5 py-2 rounded-full shadow transition-colors duration-200 text-sm"
              >
                Leggi di più
              </button>
            </Link>
          </motion.div>
          {/* Immagine a destra con overlay blu scuro */}
          <motion.div
            className="w-full md:w-1/2 relative h-100 flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/firen_antincendio/images/team.png"
              alt="Team Firen Antincendio"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sezione Servizi */}
      <motion.section
        className="w-full py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800">I nostri Servizi</h3>
          <p className="mt-4 text-lg text-gray-600">Offriamo soluzioni innovative per la prevenzione e la gestione degli incendi.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="service-card bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold red-color">Prevenzione</h4>
              <p className="mt-4 text-gray-700">Progettiamo e implementiamo sistemi avanzati di prevenzione per evitare il rischio di incendi.</p>
            </motion.div>
            <motion.div
              className="service-card bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold red-color">Intervento Rapido</h4>
              <p className="mt-4 text-gray-700">Assicuriamo un intervento tempestivo in caso di emergenza, con squadre altamente qualificate.</p>
            </motion.div>
            <motion.div
              className="service-card bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold red-color">Manutenzione</h4>
              <p className="mt-4 text-gray-700">Effettuiamo la manutenzione ordinaria e straordinaria dei sistemi antincendio, per garantire sempre la massima efficienza.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sezione Prodotti */}
      <motion.section
        className="w-full py-16 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">I nostri Prodotti</h3>
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide h-[380px]">
            <div className="flex space-x-8 min-w-[900px] h-full">
              {[
                { img: "/firen_antincendio/images/prodotti/estintore.jpg", label: "Estintore", link: "/prodotti/estintori" },
                { img: "/firen_antincendio/images/prodotti/segnaletica.png", label: "Segnaletica", link: "/prodotti/segnaletica" },
                { img: "/firen_antincendio/images/prodotti/rilevazione2.png", label: "Centrali di Rilevazione", link: "/prodotti/centraliDiRilevazione" },
                { img: "/firen_antincendio/images/prodotti/maniglione-image.png", label: "Maniglioni Antipanico", link: "/prodotti/maniglioniAntipanico" },
                { img: "/firen_antincendio/images/prodotti/porta-tagliafuoco-image.png", label: "Porte Tagliafuoco", link: "/prodotti/porteTagliafuoco" },
                { img: "/firen_antincendio/images/prodotti/illuminazione-image.png", label: "Illuminazione di Emergenza", link: "/prodotti/illuminazioneDiEmergenza" },
              ].map((prod, idx) => (
                <Link href={prod.link} key={prod.label} className="group">
                  <motion.div
                    className="relative w-[380px] h-[380px] rounded-2xl overflow-hidden shadow-xl group flex-shrink-0 bg-gray-100 cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src={prod.img}
                      alt={prod.label}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-75 flex items-center justify-center transition-opacity duration-300">
                      <span className="text-white text-3xl font-bold text-center">{prod.label}</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            Scorri orizzontalmente per vedere altri prodotti &rarr;
          </div>
        </div>
      </motion.section>

      {/* Prenota una Consulenza */}
      <motion.section
        className="w-full py-16 px-3 sm:px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeVariants}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center rounded-xl shadow-lg py-12 bg-white">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Prenota una consulenza</h3>
          <p className="text-lg text-gray-600 mb-8 text-center px-2 sm:px-4">
            Vuoi parlare con un nostro esperto? Prenota una consulenza gratuita e ti aiuteremo a trovare la soluzione migliore per te.
          </p>
          <Link href="/contatti" passHref>
            <button
              className="font-semibold px-8 py-3 rounded-lg shadow transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Vai alla pagina Contatti
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;