import Image from "next/image";
import Link from "next/link";
import { Anton, Inter } from "next/font/google";
import {
  Target,
  Bell,
  LayoutDashboard,
  MessageCircle,
  Dumbbell,
  Award,
  TrendingUp,
  UserPlus,
  Zap,
} from "lucide-react";

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

    <section className="mx-auto min-h-[85vh] max-w-7xl px-6 pt-8 pb-16">
    <div className="grid gap-12 lg:grid-cols-2">
    <div className="pt-8 text-center lg:text-left">
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-green-500 bg-green-500/10 px-6 py-3 text-base font-extrabold text-green-400">
        <Award size={18} strokeWidth={2.5} />
        <span>JULIANA PERSONAL TRAINER</span>
      </div>

      <h1 className={`${anton.className} max-w-4xl text-6xl uppercase leading-[0.9] tracking-wide md:text-7xl`}>
        TRANSFORME SEU CORPO COM ACOMPANHAMENTO REAL
      </h1>

      <p className="mt-8 max-w-3xl text-2xl font-semibold text-zinc-200">
        Treinos personalizados para mulheres que buscam emagrecimento,
        definição muscular e mais qualidade de vida.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/?demo=personal"
          className="rounded-xl bg-green-500 px-8 py-4 font-extrabold text-black transition hover:bg-green-400"
        >
          QUERO MAIS ALUNOS
        </Link>

        <Link
          href="#como-funciona"
          className="rounded-xl border border-zinc-700 px-8 py-4 font-extrabold transition hover:border-green-500"
        >
          VER COMO FUNCIONA
        </Link>
      </div>
    </div>

    <div className="flex justify-center lg:justify-end">
      <Image
        src="/images/juliana-hero.jpg"
        alt="Juliana Personal Trainer"
        width={420}
        height={760}
        className="h-auto max-h-[760px] w-auto rounded-3xl object-contain shadow-2xl" priority
      />
    </div>
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
  { Icon: UserPlus, title: "Lead entra", text: "A pessoa interessada preenche o formulário." },
  { Icon: Zap, title: "Você recebe alerta", text: "A notificação chega instantaneamente no Telegram." },
  { Icon: LayoutDashboard, title: "Contato organizado", text: "O lead fica salvo no painel da Leadify." },
  { Icon: MessageCircle, title: "WhatsApp pronto", text: "Você abre a conversa com mensagem automática." },
].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-500"
            >
              <div className="text-green-400">
              <Icon size={32} strokeWidth={2.5} />
              </div>
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
  { Icon: Target, item: "Captura interessados em treinos" },
  { Icon: Bell, item: "Envia alerta instantâneo" },
  { Icon: LayoutDashboard, item: "Organiza contatos no painel" },
  { Icon: MessageCircle, item: "Abre WhatsApp com mensagem pronta" },
  { Icon: TrendingUp, item: "Ajuda a aumentar agendamentos" },
].map(({ Icon, item }) => (
    <div
      key={item}
      className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-bold text-zinc-200"
    >
      <div className="flex items-center gap-4">
        <Icon size={24} className="text-green-400" />
        <span>{item}</span>
      </div>
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