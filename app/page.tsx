"use client";

import { useEffect, useState } from "react";
import { Anton, Inter } from "next/font/google";
import { supabase } from "@/lib/supabase";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [totalLeads, setTotalLeads] = useState(0);

  const carregarLeads = async () => {
  const { data, error } = await supabase
    .from("leads")
    .select("id");

  if (error) {
    console.error(error);
    return;
  }

  setTotalLeads(data.length);
};

  useEffect(() => {
    carregarLeads();
  }, []);

const salvarLead = async () => {
  const { error } = await supabase.from("leads").insert([
    { nome, email, whatsapp, empresa },
  ]);

  if (error) {
    alert("Erro ao salvar lead");
    console.error(error);
    return;
  }

  await fetch("/api/telegram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
      whatsapp,
      empresa,
    }),
  });

  setSucesso(true);
  await carregarLeads();

  setTimeout(() => {
    setSucesso(false);
  }, 3000);

  setModalAberto(false);

  setNome("");
  setEmail("");
  setWhatsapp("");
  setEmpresa("");
};

  return (
    <main className={`${inter.className} min-h-screen bg-black text-white`}>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className={`${anton.className} text-4xl tracking-wide md:text-5xl`}>
          LEADIFY<span className="text-green-500">.</span>
        </div>

        <nav className={`${anton.className} hidden gap-10 text-xl uppercase tracking-wide text-zinc-200 md:flex`}>
          <a href="#como-funciona" className="transition hover:text-green-400">Como funciona</a>
          <a href="#beneficios" className="transition hover:text-green-400">Benefícios</a>
          <a href="#demo" className="transition hover:text-green-400">Demonstração</a>
        </nav>

        <button
          onClick={() => setModalAberto(true)}
          className="rounded-full bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400"
        >
          Começar
        </button>
      </header>

      <section className="flex min-h-[82vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 rounded-full border border-green-500 px-4 py-2 text-sm font-bold text-green-400">
          🚀 IA POWERED WHATSAPP
        </span>

        <h1 className={`${anton.className} max-w-6xl text-6xl uppercase leading-[0.9] tracking-wide md:text-8xl`}>
          Transforme seu WhatsApp em uma máquina de clientes com IA
        </h1>

        <p className="mt-8 max-w-3xl text-2xl font-semibold text-zinc-200">
          Responda clientes em segundos, capture leads automaticamente e feche
          mais negócios sem contratar mais atendentes.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => setModalAberto(true)}
            className="rounded-xl bg-green-500 px-8 py-4 font-extrabold text-black transition hover:bg-green-400"
          >
            COMEÇAR AGORA
          </button>

          <a
            href="#demo"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-extrabold transition hover:border-green-500"
          >
            VER DEMONSTRAÇÃO
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8 text-lg font-bold text-white md:text-xl">
          <span>⚡ Responde clientes em segundos</span>
          <span>🤖 IA que qualifica oportunidades</span>
          <span>📈 Gera leads automaticamente</span>
          <span>🕒 Trabalha por você 24/7</span>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className={`${anton.className} text-5xl uppercase md:text-7xl`}>
            Como a Leadify funciona
          </h2>
          <p className="mt-4 text-xl font-medium text-zinc-300">
            Da primeira mensagem ao cliente fechado, tudo acontece automaticamente.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["📲", "Conecte o WhatsApp", "Integre seu atendimento e prepare o canal para receber clientes."],
            ["🤖", "Configure a IA", "Defina o comportamento, tom de voz e informações da empresa."],
            ["⚡", "Automatize respostas", "A IA responde, qualifica e conduz a conversa automaticamente."],
            ["📈", "Gere mais clientes", "Organize leads e aproveite melhor cada oportunidade de venda."],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-500">
              <div className="text-3xl">{icon}</div>
              <h3 className={`${anton.className} mt-5 text-2xl uppercase`}>{title}</h3>
              <p className="mt-3 text-sm text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-green-500 px-4 py-2 text-sm font-bold text-green-400">
              DEMONSTRAÇÃO
            </span>

            <h2 className={`${anton.className} mt-6 text-5xl uppercase md:text-7xl`}>
              Veja a Leadify em ação
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              A IA conversa com seus clientes, coleta informações importantes e
              organiza cada lead automaticamente para você vender mais.
            </p>

            <button
              onClick={() => setModalAberto(true)}
              className="mt-8 rounded-xl bg-green-500 px-8 py-4 font-extrabold text-black transition hover:bg-green-400"
            >
              QUERO AUTOMATIZAR MEU WHATSAPP
            </button>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-green-500/10">
            <div className="mb-5 flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-black">🤖</div>
              <div>
                <p className="font-bold">Leadify IA</p>
                <p className="text-sm text-green-400">online agora</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="max-w-[80%] rounded-2xl bg-zinc-800 p-4 text-sm text-zinc-200">
                Oi, vi seu anúncio e queria saber mais.
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl bg-green-500 p-4 text-sm font-bold text-black">
                Olá! Seja bem-vindo(a) à Leadify. 😊 Qual é o seu nome?
              </div>

              <div className="max-w-[80%] rounded-2xl bg-zinc-800 p-4 text-sm text-zinc-200">
                Meu nome é Guilherme. Tenho uma loja de roupas.
              </div>

              <div className="ml-auto max-w-[90%] rounded-2xl bg-green-500 p-4 text-sm font-bold text-black">
                Prazer, Guilherme! A Leadify pode automatizar o atendimento da
                sua loja e organizar seus leads automaticamente.
              </div>

              <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-4 text-sm font-bold text-green-400">
                ✅ Lead salvo automaticamente no CRM
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <span className="rounded-full border border-green-500 px-4 py-2 text-sm font-bold text-green-400">
            DASHBOARD
          </span>

          <h2 className={`${anton.className} mt-6 text-5xl uppercase md:text-7xl`}>
            Controle tudo em um só lugar
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Visualize leads, conversas e oportunidades em tempo real.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Dashboard Leadify</h3>
            <div className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-black">Online</div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Leads Hoje", totalLeads],
              ["Conversas", "89"],
              ["Clientes", "21"],
              ["Conversão", "18%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-black p-6">
                <p className="text-zinc-400">{label}</p>
                <h4 className="mt-3 text-4xl font-bold text-green-400">{value}</h4>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-black p-6">
            <h4 className="mb-4 font-bold">Últimos Leads</h4>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>Guilherme Silva</span>
                <span className="text-green-400">Qualificado</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>Ana Martins</span>
                <span className="text-yellow-400">Em Atendimento</span>
              </div>

              <div className="flex justify-between">
                <span>Lucas Pereira</span>
                <span className="text-blue-400">Novo Lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["12K+", "Mensagens Respondidas"],
            [totalLeads, "Leads Capturados"],
            ["24/7", "Atendimento Contínuo"],
            ["98%", "Taxa de Resposta"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
              <h3 className={`${anton.className} text-7xl text-green-400`}>
                {value}
              </h3>
              <p className="mt-3 font-semibold text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className={`${anton.className} text-5xl uppercase md:text-8xl`}>
          Pronto para transformar seu WhatsApp em uma máquina de vendas?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400">
          Automatize atendimentos, capture leads e aumente suas vendas sem aumentar sua equipe.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setModalAberto(true)}
            className="rounded-xl bg-green-500 px-8 py-4 font-extrabold text-black transition hover:bg-green-400"
          >
            COMEÇAR AGORA
          </button>

          <button className="rounded-xl border border-zinc-700 px-10 py-5 font-bold transition hover:border-green-500">
            AGENDAR DEMONSTRAÇÃO
          </button>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div>
            <h3 className={`${anton.className} text-4xl`}>
              LEADIFY<span className="text-green-500">.</span>
            </h3>
            <p className="mt-2 text-zinc-500">Automação inteligente para WhatsApp.</p>
          </div>

          <div className="flex gap-8 text-zinc-400">
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#demo">Demonstração</a>
          </div>

          <div className="text-sm text-zinc-600">
            © 2026 Leadify. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className={`${anton.className} text-3xl uppercase`}>
                Solicitar Demonstração
              </h2>

              <button
                onClick={() => setModalAberto(false)}
                className="text-2xl text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-4">
              <input className="rounded-xl border border-zinc-800 bg-black p-4 text-white" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              <input className="rounded-xl border border-zinc-800 bg-black p-4 text-white" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="rounded-xl border border-zinc-800 bg-black p-4 text-white" placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              <input className="rounded-xl border border-zinc-800 bg-black p-4 text-white" placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />

              <button onClick={salvarLead} className="mt-3 rounded-xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400">
                QUERO AUTOMATIZAR MEU WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}

      {sucesso && (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-green-500 bg-zinc-950 px-6 py-4 shadow-lg">
          <p className="font-bold text-green-400">
            ✅ Lead cadastrado com sucesso!
          </p>
        </div>
      )}
    </main>
  );
}