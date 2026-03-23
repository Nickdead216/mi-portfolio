export default function Loading() {
  return (
    <div className="p-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Proyectos en GitHub</h1>
      <div className="flex flex-col gap-4">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-48 mb-3"/>
            <div className="h-4 bg-gray-100 rounded w-full mb-3"/>
            <div className="h-6 bg-gray-100 rounded w-16"/>
          </div>
        ))}
      </div>
    </div>
  )
}