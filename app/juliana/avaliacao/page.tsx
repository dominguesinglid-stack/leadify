"use client"

import { useState } from "react"
export default function AvaliacaoPage() {
const [nome, setNome] = useState("")
const [phone, setPhone] = useState("")
const [objetivo, setObjetivo] = useState("")

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11)

  if (numbers.length <= 2) {
    return `(${numbers}`
  }

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
}
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  await fetch("/api/telegram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email: "Não informado",
      whatsapp: phone,
      empresa: `Avaliação Juliana - ${objetivo}`,
    }),
  })

  window.location.href = "/juliana/obrigado"
}
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Avaliação Gratuita
        </h1>

        <p className="text-zinc-400 mb-8">
          Preencha seus dados para receber uma análise inicial.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-4"
        />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="(00) 00000-0000"
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-4"
          />

          <select
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-4"
          >
          <option value="">Qual seu objetivo?</option>
          <option value="Ganho de massa">Ganho de massa</option>
          <option value="Emagrecimento">Emagrecimento</option>
          <option value="Condicionamento físico">Condicionamento físico</option>
          <option value="Qualidade de vida">Qualidade de vida</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 text-black font-bold p-4"
          >
            Receber Avaliação Gratuita
          </button>
        </form>
      </div>
    </main>
  );
}