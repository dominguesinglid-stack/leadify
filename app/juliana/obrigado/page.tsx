import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-black">
          ✓
        </div>

        <h1 className="mb-4 text-4xl font-bold">
          Avaliação Recebida
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-zinc-300">
  Recebemos sua avaliação.
</p>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  Sua Personal irá analisar suas respostas e em breve entrará em contato pelo WhatsApp.
</p>

        <div className="mb-8 space-y-3 text-left text-zinc-200">
          <p>✅ Análise inicial gratuita</p>
          <p>✅ Orientação sobre seu objetivo</p>
          <p>✅ Próximos passos para começar</p>
        </div>

        <a
  href="https://wa.me/5521996294781?text=Olá%20Juliana!%20Acabei%20de%20enviar%20minha%20avaliação%20e%20gostaria%20de%20receber%20mais%20informações%20sobre%20o%20acompanhamento."
  target="_blank"
  className="block rounded-xl bg-green-400 px-8 py-4 font-bold text-black transition hover:bg-green-300"
>
  Chamar no WhatsApp
</a>

        <Link
          href="/juliana"
          className="mt-6 block text-sm text-zinc-500 hover:text-white"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}