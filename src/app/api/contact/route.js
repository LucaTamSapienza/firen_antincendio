import { sendMail } from './sendMail';

export async function POST(req) {
  const { name, email, subject, message, phone } = await req.json(); // aggiungi phone

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'Campi mancanti' }), { status: 400 });
  }

  try {
    await sendMail({
      email,
      subject: `📬 Nuovo messaggio da ${name}: ${subject}`,
      text: `${message}\n\nTelefono: ${phone || 'Non fornito'}`, // aggiungi telefono nel testo
      html: `
        <h2>Hai ricevuto un nuovo messaggio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
        <p><strong>Oggetto:</strong> ${subject}</p>
        <p><strong>Messaggio:</strong><br/>${message}</p>
      `,
    });
    return new Response(JSON.stringify({ message: 'Email inviata con successo!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Errore invio email' }), { status: 500 });
  }
}