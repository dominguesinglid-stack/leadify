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
        <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-black tracking-wide text-white">
       Juliana Ottero
      </span>

      <span className="mt-1 text-xs uppercase tracking-[0.25em] text-green-500 md:text-sm md:tracking-[0.4em]">
      PERSONAL TRAINER • CONSULTORIA ONLINE E PRESENCIAL
      </span>
      </div>
      </header>

    <section className="mx-auto min-h-[85vh] max-w-7xl px-6 pt-8 pb-16">
    <div className="grid gap-12 lg:grid-cols-2">
    <div className="pt-4 text-center lg:text-left">

      <h1 className={`${anton.className} max-w-full text-[2.8rem] uppercase leading-[0.9] tracking-wide sm:text-5xl md:max-w-4xl md:text-7xl`}>
        TRANSFORME SEU CORPO COM ACOMPANHAMENTO REAL
      </h1>

      <p className="mt-8 max-w-3xl text-lg md:text-2xl font-semibold text-zinc-200 md:text-2xl">
        Treinamento personalizado para homens e mulheres que buscam mais força, condicionamento físico, performance e qualidade de vida.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/?demo=personal"
          className="rounded-xl bg-green-500 px-8 py-4 font-extrabold text-black transition hover:bg-green-400"
        >
          AGENDAR AVALIAÇÃO
        </Link>

        <Link
          href="#metodo"
          className="rounded-xl border border-zinc-700 px-8 py-4 font-extrabold transition hover:border-green-500"
        >
          COMO FUNCIONA
        </Link>
      </div>
    </div>

    <div className="mt-4 flex justify-center lg:mt-0 lg:justify-end">
      <Image
        src="/images/juliana-hero.jpg"
        alt="Juliana Personal Trainer"
        width={360}
        height={620}
        className="h-auto max-h-[620px] w-auto rounded-3xl object-contain shadow-2xl lg:max-h-[760px]" priority
      />
    </div>
  </div>
</section>

      <section id="metodo" className="mx-auto max-w-7xl px-6 pt-4 pb-16">
        <div className="text-center">
          <h2 className={`${anton.className} text-5xl uppercase md:text-7xl`}>
            Como funciona o acompanhamento
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-300">
            Um processo simples para você treinar com orientação, constância e foco em resultado.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
  { Icon: UserPlus, title: "Avaliação inicial", text: "Entenda seu objetivo, rotina e nível atual." },
  { Icon: Zap, title: "Plano personalizado", text: "Treinos ajustados para seu corpo e sua realidade." },
  { Icon: LayoutDashboard, title: "Acompanhamento", text: "Evolução acompanhada com ajustes quando necessário." },
  { Icon: MessageCircle, title: "Suporte direto", text: "Contato facilitado para tirar dúvidas e manter o foco." },
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
              EVOLUA COM UM PLANO FEITO PARA VOCÊ
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Treinos personalizados para quem busca ganho de massa muscular, condicionamento físico, performance e mais qualidade de vida.
            </p>
          </div>

          <div className="grid gap-4">
  {[
  { Icon: Target, item: "Avaliação personalizada" },
  { Icon: Bell, item: "Plano de treino individual" },
  { Icon: LayoutDashboard, item: "Acompanhamento contínuo" },
  { Icon: MessageCircle, item: "Suporte direto pelo WhatsApp" },
  { Icon: TrendingUp, item: "Evolução baseada em resultados" },
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
          PRONTO PARA COMEÇAR SUA TRANSFORMAÇÃO?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400">
          Dê o primeiro passo para alcançar seus objetivos com orientação profissional e acompanhamento personalizado.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-xl bg-green-500 px-10 py-5 font-bold text-black transition hover:bg-green-400"
        >
          AGENDAR AVALIAÇÃO
        </Link>
      </section>
    </main>
  );
}