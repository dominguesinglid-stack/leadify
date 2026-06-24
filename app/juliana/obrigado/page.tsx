import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Avaliação Recebida 💪
        </h1>

        <div className="text-zinc-300 text-xl mb-8 space-y-4">
          <p>Recebemos sua avaliação.</p>

          <p>
            Sua Personal irá analisar suas respostas e em breve entrará em
            contato pelo WhatsApp.
          </p>

          <div className="space-y-2">
            <p>✅ Análise inicial gratuita</p>
            <p>✅ Orientação sobre seu objetivo</p>
            <p>✅ Próximos passos para começar</p>
          </div>
        </div>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          className="inline-block rounded-xl bg-green-500 px-8 py-4 text-black font-bold"
        >
          Falar com sua Personal
        </a>

        <div className="mt-6">
          <Link href="/juliana" className="text-zinc-400 hover:text-white">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}