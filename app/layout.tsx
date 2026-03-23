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
        <nav className="flex gap-6 p-6 border-b border-gray-200">
          <Link href="/" className="font-bold text-gray-900 hover:text-blue-600">
            Nicolás Vicentelo
          </Link>
          <div className="flex gap-4 ml-auto">
            <Link href="/proyectos" className="text-gray-600 hover:text-blue-600">
              Proyectos
            </Link>
            <Link href="/contacto" className="text-gray-600 hover:text-blue-600">
              Contacto
            </Link>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}