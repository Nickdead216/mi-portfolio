import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { nombre, email, mensaje } = body

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: 'Todos los campos son requeridos' },
      { status: 400 }
    )
  }

  console.log('Mensaje recibido:', { nombre, email, mensaje })

  return NextResponse.json(
    { ok: true, mensaje: 'Mensaje recibido correctamente' },
    { status: 200 }
  )
}