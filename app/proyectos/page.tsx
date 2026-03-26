type Proyecto = {
  id: number
  nombre: string
  descripcion: string
  tecnologias: string[]
  anio: string
}

async function getProyectos(): Promise<Proyecto[]> {
  const res = await fetch('https://mi-backend-dj0e.onrender.com/api/proyectos/', {
  cache: 'no-store'
  })
  return res.json()
}

export default async function Proyectos() {
  const proyectos = await getProyectos()

  return (
    <div className="p-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Proyectos</h1>
      <div className="flex flex-col gap-6">
        {proyectos.map((p) => (
          <div key={p.id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{p.nombre}</h2>
              <span className="text-sm text-gray-400">{p.anio}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{p.descripcion}</p>
            <div className="flex flex-wrap gap-2">
              {p.tecnologias.map((t) => (
                <span key={t} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}