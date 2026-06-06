"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  created_at?: string;
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [busca, setBusca] = useState("");

  const carregarLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setLeads(data || []);
  };

  useEffect(() => {
    carregarLeads();
  }, []);
  const leadsFiltrados = leads.filter((lead) => {
  const termo = busca.toLowerCase();

  return (
    lead.nome?.toLowerCase().includes(termo) ||
    lead.email?.toLowerCase().includes(termo) ||
    lead.whatsapp?.toLowerCase().includes(termo) ||
    lead.empresa?.toLowerCase().includes(termo)
  );
});

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-5xl font-black">Leads Capturados</h1>
            <p className="mt-3 text-zinc-400">
              Visualize os contatos recebidos pela landing da Leadify.
            </p>
          </div>

          <div className="rounded-full bg-green-500 px-5 py-3 font-bold text-black">
            {leads.length} leads
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Total de Leads</p>
            <h2 className="mt-3 text-5xl font-black text-green-400">
              {leads.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Novos Contatos</p>
            <h2 className="mt-3 text-5xl font-black text-green-400">
              {leads.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Origem</p>
            <h2 className="mt-3 text-3xl font-black text-green-400">
              Landing
            </h2>
          </div>
        </div>

  <input
  className="mb-6 w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-white outline-none focus:border-green-500"
  placeholder="Buscar por nome, empresa, e-mail ou WhatsApp..."
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
/>

        <div className="grid gap-5">
          {leadsFiltrados.map((lead) => (
            <div
              key={lead.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-500"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">{lead.nome}</h3>
                  <p className="mt-1 text-zinc-400">{lead.empresa}</p>
                </div>

                <div className="flex flex-col gap-2 text-zinc-300 md:text-right">
                  <p>{lead.email}</p>
                  <p>{lead.whatsapp}</p>
                </div>

                <a
                  href={`https://wa.me/55${lead.whatsapp}`}
                  target="_blank"
                  className="rounded-xl bg-green-500 px-5 py-3 text-center font-bold text-black transition hover:bg-green-400"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}