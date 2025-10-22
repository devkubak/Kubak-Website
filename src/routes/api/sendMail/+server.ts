import { render } from "svelte-email";
import ContactEmail from "$lib/Components/EmailTemplate.Component.svelte";
import { createTransport, Transporter } from "nodemailer";
import type { RequestHandler } from "@sveltejs/kit";

let transport: Transporter;

export const POST: RequestHandler = async ({ request }) => {
  const {
    emailUser,
    name,
    message,
    phone
  }: { emailUser: string; name: string; message: string; phone: number } =
    await request.json();

  if (!transport) {
    transport = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        //support email
        // user: "dana.code01@gmail.com",
        user: "ali.g.5579@gmail.com",

        //support email passkey
        // pass: "mtij ndvf kbrd icvd",
        pass: "ptnx jwgr ufgc iajz",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  const emailHtml = await render({
    template: ContactEmail,
    props: { 
      emailUser, 
      name, 
      message, 
      phone
    },
  });

  await transport.sendMail({
    from: emailUser,
    to: "ali.g.5579@gmail.com",
    subject: name,
    html: emailHtml,
  });

  return new Response("successful");
};
