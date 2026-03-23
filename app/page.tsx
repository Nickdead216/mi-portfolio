type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
}

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    'https://api.github.com/users/Nickdead216/repos?sort=stars&per_page=6',
    { next: { revalidate: 3600 } }
  )
  return res.json()
}

export default async function Proyectos() {
  const repos = await getRepos()

  return (
    <div className="p-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Proyectos en GitHub</h1>
      <p className="text-gray-500 text-sm mb-8">Datos traídos desde la API de GitHub en el servidor</p>
      <div className="flex flex-col gap-4">
        {repos.map((repo) => (
          
          <a key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{repo.name}</h2>
              <span className="text-sm text-yellow-600">★ {repo.stargazers_count}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              {repo.description || 'Sin descripción'}
            </p>
            {repo.language && (
              <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                {repo.language}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}