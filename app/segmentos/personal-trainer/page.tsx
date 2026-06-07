import Link from "next/link";
import { Anton, Inter } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function PersonalTrainerPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-black text-white`}>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className={`${anton.className} text-4xl tracking-wide`}>
          LEADIFY<span className="text-green-500">.</span>
        </Link>

        <Link
          href="/"
          className="rounded-full border border-zinc-700 px-5 py-2 font-bold transition hover:border-green-500"
        >
          Voltar
        </Link>
      </header>

      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 rounded-full border border-green-500 px-4 py-2 text-sm font-bold text-green-400">
          🏋️ LEADIFY PARA PERSONAL TRAINERS
        </span>

        <h1 className={`${anton.className} max-w-6xl text-6xl uppercase leading-[0.9] tracking-wide md:text-8xl`}>
          Capture mais alunos pelo WhatsApp
        </h1>

        <p className="mt-8 max-w-3xl text-2xl font-semibold text-zinc-200">
          Receba interessados em consultoria online, treinos presenciais e
          acompanhamento personalizado direto no seu painel.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#demo"
            className="rounded-xl bg-green-500 px-8 py-4 font-extrabold text-black transition hover:bg-green-400"
          >
            QUERO MAIS ALUNOS
          </a>

          <a
            href="#como-funciona"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-extrabold transition hover:border-green-500"
          >
            VER COMO FUNCIONA
          </a>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className={`${anton.className} text-5xl uppercase md:text-7xl`}>
            Como funciona
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-300">
            Um fluxo simples para transformar interessados em alunos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["📲", "Lead entra", "A pessoa interessada preenche o formulário."],
            ["⚡", "Você recebe alerta", "A notificação chega instantaneamente no Telegram."],
            ["📋", "Contato organizado", "O lead fica salvo no painel da Leadify."],
            ["💬", "WhatsApp pronto", "Você abre a conversa com mensagem automática."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-500"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className={`${anton.className} mt-5 text-3xl uppercase`}>
                {title}
              </h3>
              <p className="mt-3 text-sm text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-green-500 px-4 py-2 text-sm font-bold text-green-400">
              BENEFÍCIOS
            </span>

            <h2 className={`${anton.className} mt-6 text-5xl uppercase md:text-7xl`}>
              Mais alunos, menos conversa perdida
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Ideal para personal trainers que vendem consultoria online,
              treino presencial, avaliação física ou acompanhamento individual.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "🏋️ Captura interessados em treinos",
              "📲 Envia alerta instantâneo",
              "📋 Organiza contatos no painel",
              "💬 Abre WhatsApp com mensagem pronta",
              "📈 Ajuda a aumentar agendamentos",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-bold text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className={`${anton.className} text-5xl uppercase md:text-8xl`}>
          Pronta para testar com seus primeiros leads?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400">
          Use a Leadify para captar interessados e responder mais rápido pelo WhatsApp.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-xl bg-green-500 px-10 py-5 font-bold text-black transition hover:bg-green-400"
        >
          VOLTAR PARA A DEMONSTRAÇÃO
        </Link>
      </section>
    </main>
  );
}