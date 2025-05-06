'use client';
import React, { useState } from 'react';
import Hero from '@/components/utils/Hero';

const PageContatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
  
    try {
      const res = await fetch('/firen_antincendio/api/contact', {  // Cambia /sendMail con /contact
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  

  return (
    <section className="w-full px-0 bg-white pb-10">
      <Hero image="/firen_antincendio/images/hero-contact.jpg" title="Contatti" />
      <div className="w-full relative flex flex-col md:flex-row items-stretch justify-between overflow-hidden shadow-lg bg-gray-900">
        <img
          src="/firen_antincendio/images/contatti-bg.png"
          alt="Contatti Firen Antincendio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-left relative z-10">
          <h3 className="text-3xl font-semibold text-white mb-6">Contattaci</h3>
          <p className="text-lg text-gray-200 mb-2">Via Vergemoli 16, Roma (RM)</p>
          <p className="text-lg text-gray-200 mb-2">06 83084988</p>
          <p className="text-lg text-gray-200 mb-2">firen.info@gmail.com</p>
          <p className="text-lg text-gray-200">Lun - Ven: 7:30 - 18:00</p>
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative z-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 relative">
            <h2 className="text-xl font-semibold text-white mb-2 text-center">Scrivici un messaggio</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome e Cognome*"
              className="w-full p-2 rounded bg-gray-100 text-gray-900 border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full p-2 rounded bg-gray-100 text-gray-900 border border-gray-300"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Oggetto del messaggio*"
              className="w-full p-2 rounded bg-gray-100 text-gray-900 border border-gray-300"
              required
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Il tuo messaggio*"
              className="w-full p-2 rounded bg-gray-100 text-gray-900 border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
            >
              {status === 'loading' ? 'Invio in corso...' : 'Invia'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-sm mt-2">Messaggio inviato con successo!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">Errore nell'invio, riprova.</p>
            )}
            <span className="absolute right-0 -bottom-4 text-s text-gray-300">
              * campi obbligatori
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PageContatti;
