'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chiSiamo" },
  { 
    label: "Servizi", 
    href: "/servizi",
    dropdown: [
      { label: "Manutenzione", href: "/servizi/manutenzione" },
      { label: "Installazione Porte Tagliafuoco", href: "/servizi/installazionePorteTagliafuoco" },
      { label: "Impianti di Rilevazione Antincendio", href: "/servizi/irai" },
      { label: "Impianti Elettrici", href: "/servizi/impiantiElettrici" },
    ]
  },
  { 
    label: "Prodotti", 
    href: "/prodotti",
    dropdown: [
      { label: "Estintori", href: "/prodotti/estintori" },
      { label: "Segnaletica", href: "/prodotti/segnaletica" },
      { label: "Centrali di Rilevazione", href: "/prodotti/centraliDiRilevazione" },
      { label: "Maniglioni Antipanico", href: "/prodotti/maniglioniAntipanico" },
      { label: "Porte Tagliafuoco", href: "/prodotti/porteTagliafuoco" },
      { label: "Illuminazione di Emergenza", href: "/prodotti/illuminazioneDiEmergenza" },
    ]
  },
  { label: "Contatti", href: "/contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mobileVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="bg-white text-gray-900 shadow-md fixed top-0 w-full z-50"
        >
          <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
              <Link href="/">
                <img src="/images/logo.png" alt="Firen Antincendio Logo" className="w-32 h-25"/>
              </Link>
            </motion.div>
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(item.dropdown ? index : null)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link href={item.href} className="text-lg font-medium">
                    {item.label}
                  </Link>
                  {/* Dropdown */}
                  {item.dropdown && dropdownOpen === index && (
                    <div className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-100 hover:text-red-600 transition"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-4/5 h-[2px] bg-gray-800 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ left: '10%' }}
                    />
                </motion.div>
              ))}
            </div>
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileVariants}
                className="md:hidden bg-gray-800 px-8 pb-6 pt-3 space-y-4"
              >
                {navItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white text-lg"
                    >
                      {item.label}
                    </Link>
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.dropdown.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-300 py-1 text-base"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;