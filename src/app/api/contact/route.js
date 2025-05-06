import { sendMail } from './sendMail';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'Campi mancanti' }), { status: 400 });
  }

  try {
    await sendMail({
      email,
      subject: `📬 Nuovo messaggio da ${name}: ${subject}`,
      text: message,
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
    return new Response(JSON.stringify({ message: 'Errore invio email' }), { status: 500 });
  }
}