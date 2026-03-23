const proyectos = [
  {
    nombre: "Gestión Documental – Municipalidad de Coquimbo",
    descripcion: "3 aplicaciones para automatización de procesos documentales con OCR y procesamiento de imágenes.",
    tecnologias: ["Python", "Django", "OpenCV", "Tesseract OCR"],
    anio: "2025",
  },
  {
    nombre: "ecoREPORT ITOs – Capstone",
    descripcion: "Módulos de gestión de mantenimiento con flujos de trabajo para priorización y generación de órdenes.",
    tecnologias: ["Yii2", "PHP", "MySQL", "AJAX"],
    anio: "2025",
  },
  {
    nombre: "Cartelera de Cine",
    descripcion: "Interfaz frontend para sistema de gestión de cartelera integrada con API.",
    tecnologias: ["React Native", "Nest.js"],
    anio: "2024",
  },
  {
    nombre: "Sistema de Inventario con Power BI",
    descripcion: "Solución de visualización de datos para inventario vinculada con SharePoint.",
    tecnologias: ["Power BI", "SharePoint", "Excel"],
    anio: "2024",
  },
  {
    nombre: "Vive Full Deportes",
    descripcion: "Sistema web para gestión de eventos deportivos.",
    tecnologias: ["PHP", "MySQL"],
    anio: "2023",
  },
]

export default function Proyectos() {
  return (
    <div className="p-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Proyectos</h1>
      <div className="flex flex-col gap-6">
        {proyectos.map((p) => (
          <div key={p.nombre} className="border border-gray-200 rounded-xl p-6">
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