import Link from 'next/link'

const tecnologias = [
  'React',
  'Next.js',
  'Django',
  'Python',
  'TypeScript',
  'Docker',
  'PostgreSQL',
  'REST APIs',
]

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
        Portfolio personal
      </span>

      <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl">
        Nicolás Vicentelo
      </h1>

      <p className="mt-4 text-lg font-medium text-[#88a4ff] md:text-xl">
        Fullstack Developer · React · Next.js · Django · Python
      </p>

      <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
        Ingeniero Civil en Computación e Informática con experiencia en
        automatización de procesos, desarrollo web y procesamiento de datos.
        Disponible para trabajo remoto o presencial en Coquimbo.
      </p>

      <div className="mt-10 flex w-full max-w-5xl flex-col gap-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {tecnologias.map((tech) => (
            <div
              key={tech}
              className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 px-4 text-center text-sm font-medium text-slate-300 transition hover:border-[#5f79ff] hover:text-white"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
        <Link
          href="/proyectos"
          className="inline-flex min-w-[170px] items-center justify-center rounded-xl bg-[#5f79ff] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#5f79ff]/20 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#4f6bf2] hover:shadow-xl hover:shadow-[#5f79ff]/30"
        >
          Ver proyectos
        </Link>

        <Link
          href="/contacto"
          className="inline-flex min-w-[145px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-7 py-3.5 text-[15px] font-medium text-slate-200 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#5f79ff]/50 hover:bg-[#151c2b] hover:text-white hover:shadow-xl hover:shadow-black/20"
        >
          Contacto
        </Link>

        <a
          href="https://www.linkedin.com/in/nicolas-vicentelo-110211325"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-[145px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-7 py-3.5 text-[15px] font-medium text-slate-200 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#5f79ff]/50 hover:bg-[#151c2b] hover:text-white hover:shadow-xl hover:shadow-black/20"
        >
          LinkedIn
        </a>
      </div>
      </div>
    </section>
  )
}