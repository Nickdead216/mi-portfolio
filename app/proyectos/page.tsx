type Proyecto = {
  id: number
  nombre: string
  descripcion: string
  tecnologias: string[]
  anio: string
  url: string
}

async function getProyectos(): Promise<Proyecto[]> {
  const res = await fetch('https://mi-backend-dj0e.onrender.com/api/proyectos/', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Error al obtener los proyectos')
  }

  return res.json()
}

const colorTecnologia: Record<string, string> = {
  Python: 'border-blue-400/20 bg-blue-400/10 text-blue-200',
  JavaScript: 'border-yellow-400/20 bg-yellow-400/10 text-yellow-200',
  TypeScript: 'border-sky-400/20 bg-sky-400/10 text-sky-200',
  PHP: 'border-violet-400/20 bg-violet-400/10 text-violet-200',
  HTML: 'border-orange-400/20 bg-orange-400/10 text-orange-200',
  CSS: 'border-pink-400/20 bg-pink-400/10 text-pink-200',
  default: 'border-white/10 bg-white/5 text-slate-300',
}

export default async function Proyectos() {
  const proyectos = await getProyectos()

  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-md">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-200">
          Portafolio
        </span>

        <h1 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
          Proyectos
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
          Repositorios de GitHub conectados a tu backend. Actualmente se muestran{' '}
          {proyectos.length} proyectos.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {proyectos.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
                  Proyecto
                </span>

                <h2 className="mt-4 text-xl font-semibold text-white transition group-hover:text-blue-300">
                  {p.nombre}
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                {p.anio}
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              {p.descripcion}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.tecnologias.filter(Boolean).map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    colorTecnologia[t] || colorTecnologia.default
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
              <span className="text-slate-400">Repositorio en GitHub</span>
              <span className="font-medium text-blue-300 transition group-hover:translate-x-1">
                Ver proyecto →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}