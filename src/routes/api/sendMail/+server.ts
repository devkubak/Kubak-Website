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
        user: "info@kubakgroup.com", //support email
        pass: "#",  //support email passkey
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
    to: "info@kubakgroup.com",
    subject: name,
    html: emailHtml,
  });


  return new Response("successful");
};
