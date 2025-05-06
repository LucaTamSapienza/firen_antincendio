// app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'Campi mancanti' }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false, // true per 465, false per altri porti
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,  // Da dove parte la mail
      to: process.env.EMAIL_USER,    // Dove vuoi ricevere la mail
      replyTo: email,                // Così puoi rispondere direttamente all'utente
      subject: `📬 Nuovo messaggio da ${name}: ${subject}`,
      html: `
        <h2>Hai ricevuto un nuovo messaggio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Oggetto:</strong> ${subject}</p>
        <p><strong>Messaggio:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email inviata con successo!' }), { status: 200 });
  } catch (error) {
    console.error('Errore invio email:', error);
    return new Response(JSON.stringify({ message: 'Errore invio email' }), { status: 500 });
  }
}
