export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mensagem = `
🚀 Novo Lead Leadify

👤 Nome: ${body.nome}
🏢 Empresa: ${body.empresa}
📧 E-mail: ${body.email}
📱 WhatsApp: ${body.whatsapp}
`;

    const resposta = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: mensagem,
        }),
      }
    );

    const resultado = await resposta.json();

    return Response.json(resultado);
  } catch (error) {
    return Response.json({ success: false, error });
  }
}