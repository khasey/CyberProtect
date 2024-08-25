import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey("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");

export async function POST(req: Request) {
  try {
    const { name, email, message, file } = await req.json();

    await sendgrid.send({
      to: 'kevthie@gmail.com',
      from: 'kevthiedev@gmail.com',
      subject: `Nouveau message de ${name}`,
      html: `<p>Vous avez reçu un nouveau message de la part de <strong>${name}</strong> (${email})</p>
             <p>Message : ${message}</p>`,
      attachments: file
        ? [
            {
              content: file, // Le contenu du fichier encodé en base64
              filename: 'attachment.jpg',
              type: 'image/jpeg',
              disposition: 'attachment',
            },
          ]
        : [],
    });

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}