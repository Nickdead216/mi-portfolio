import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicolás Vicentelo | Fullstack Developer',
  description: 'Portfolio de Nicolás Vicentelo, Fullstack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen">
          <header className="w-full border-b border-white/10 bg-[#0d111a]/80 backdrop-blur">
            <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-14 xl:px-20">
              <Link
                href="/"
                className="text-xl font-semibold tracking-tight text-white"
              >
                NV
              </Link>

              <div className="flex items-center gap-4 text-sm text-slate-400 sm:gap-6 md:gap-8">
                <Link href="/proyectos" className="transition hover:text-white">
                  Proyectos
                </Link>
                <Link href="/contacto" className="transition hover:text-white">
                  Contacto
                </Link>
                <a
                  href="https://github.com/Nickdead216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </nav>
          </header>

          <main className="flex min-h-[calc(100vh-69px)] items-center justify-center px-6 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}