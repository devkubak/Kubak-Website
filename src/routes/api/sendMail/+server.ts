import { render } from 'svelte-email';
import ContactEmail from '$lib/Components/EmailTemplate.Component.svelte';
import { createTransport, Transporter } from 'nodemailer';
import type { RequestHandler } from '@sveltejs/kit';

let transport: Transporter;

export const POST: RequestHandler = async ({ request }) => {
  const { emailUser, name, message }: { emailUser: string, name: string, message: string } = await request.json();

  if (!transport) {
    transport = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ali.g.5579@gmail.com", //support email
        pass: "ptnx jwgr ufgc iajz",  //support email passkey
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  const emailHtml = await render({
    template: ContactEmail,
    props: { emailUser, name, message }
  });
  



   await transport.sendMail({
    from: emailUser,
    to: "ali.g.5579@gmail.com",
    subject: name,
    html: emailHtml,
  });


  return new Response("successful");
};
