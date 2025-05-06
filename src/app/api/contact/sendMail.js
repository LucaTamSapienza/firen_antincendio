import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: SMTP_SERVER_HOST,
    port: 465,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail({ email, subject, text, html }) {
  try {
    await transporter.verify();
    const info = await transporter.sendMail({
      from: email,
      to: SITE_MAIL_RECIEVER,
      subject,
      text,
      html: html || '',
    });
    console.log('Message Sent', info.messageId);
    return info;
  } catch (error) {
    console.error('Mail error:', error);
    throw error;
  }
}