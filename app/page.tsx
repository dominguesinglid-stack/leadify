export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold">
          Leadify<span className="text-green-500">.</span>
        </div>

        <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#como-funciona" className="hover:text-white">
            Como funciona
          </a>
          <a href="#beneficios" className="hover:text-white">
            Benefícios
          </a>
          <a href="#demo" className="hover:text-white">
            Demonstração
          </a>
        </nav>

        <button className="rounded-full bg-green-500 px-5 py-2 font-bold text-black transition hover:bg-green-400">
          Começar
        </button>
      </header>

      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full border border-green-500 px-4 py-2 text-sm text-green-400">
          🚀 IA para WhatsApp
        </span>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Transforme seu WhatsApp em uma máquina de clientes com IA
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Automatize atendimento, capture leads e responda clientes
          automaticamente 24 horas por dia.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400">
            Começar Agora
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 font-bold transition hover:border-green-500">
            Ver Demonstração
          </button>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
          <span>✅ Atendimento automático</span>
          <span>✅ IA humanizada</span>
          <span>✅ Captação de leads</span>
          <span>✅ Funciona 24h</span>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Como a Leadify funciona
          </h2>
          <p className="mt-4 text-zinc-400">
            Um fluxo simples para transformar conversas em oportunidades.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="text-3xl">📲</div>
            <h3 className="mt-4 text-xl font-bold">Conecte o WhatsApp</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Integre seu atendimento e prepare o canal para receber clientes.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="text-3xl">🤖</div>
            <h3 className="mt-4 text-xl font-bold">Configure a IA</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Defina o comportamento, tom de voz e informações da empresa.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-4 text-xl font-bold">Automatize respostas</h3>
            <p className="mt-3 text-sm text-zinc-400">
              A IA responde, qualifica e conduz a conversa automaticamente.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="text-3xl">📈</div>
            <h3 className="mt-4 text-xl font-bold">Gere mais clientes</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Organize leads e aproveite melhor cada oportunidade de venda.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-green-500 px-4 py-2 text-sm text-green-400">
              Demonstração
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Veja a Leadify em ação.
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              A IA conversa com seus clientes, coleta informações importantes e
              organiza cada lead automaticamente para você vender mais.
            </p>

            <button className="mt-8 rounded-xl bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400">
              Quero automatizar meu WhatsApp
            </button>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-green-500/10">
            <div className="mb-5 flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-black">
                🤖
              </div>
              <div>
                <p className="font-bold">Leadify IA</p>
                <p className="text-sm text-green-400">online agora</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="max-w-[80%] rounded-2xl bg-zinc-800 p-4 text-sm text-zinc-200">
                Oi, vi seu anúncio e queria saber mais.
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl bg-green-500 p-4 text-sm font-medium text-black">
                Olá! Seja bem-vindo(a) à Leadify. 😊 Qual é o seu nome?
              </div>

              <div className="max-w-[80%] rounded-2xl bg-zinc-800 p-4 text-sm text-zinc-200">
                Meu nome é Guilherme. Tenho uma loja de roupas.
              </div>

              <div className="ml-auto max-w-[90%] rounded-2xl bg-green-500 p-4 text-sm font-medium text-black">
                Prazer, Guilherme! A Leadify pode automatizar o atendimento da
                sua loja e organizar seus leads automaticamente.
              </div>

              <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-4 text-sm text-green-400">
                ✅ Lead salvo automaticamente no CRM
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}