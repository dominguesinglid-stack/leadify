export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mensagem = `
💪 NOVA AVALIAÇÃO JULIANA

👤 Nome: ${body.nome}
📱 WhatsApp: ${body.whatsapp}
🎯 Objetivo: ${body.empresa?.replace("Avaliação Juliana - ", "")}

📅 ${new Date().toLocaleString("pt-BR")}

🟢 Aguardando contato
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