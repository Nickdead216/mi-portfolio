'use client'

import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle')

  async function handleSubmit() {
    setEstado('enviando')
    const res = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setEstado('ok')
      setForm({ nombre: '', email: '', mensaje: '' })
    } else {
      setEstado('error')
    }
  }

  return (
    <div className="p-12 max-w-lg">
      <h1 className="text-3xl font-bold mb-2">Contacto</h1>
      <p className="text-gray-500 text-sm mb-8">Envíame un mensaje y te respondo pronto</p>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={e => setForm({ ...form, nombre: e.target.value })}
          className="border border-gray-200 rounded-lg p-3 text-sm outline-none focus:border-blue-400"
        />
        <input
          type="email"
          placeholder="Tu email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="border border-gray-200 rounded-lg p-3 text-sm outline-none focus:border-blue-400"
        />
        <textarea
          placeholder="Tu mensaje"
          rows={5}
          value={form.mensaje}
          onChange={e => setForm({ ...form, mensaje: e.target.value })}
          className="border border-gray-200 rounded-lg p-3 text-sm outline-none focus:border-blue-400 resize-none"
        />
        <button
          onClick={handleSubmit}
          disabled={estado === 'enviando'}
          className="bg-blue-600 text-white rounded-lg p-3 text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {estado === 'ok' && (
          <p className="text-green-600 text-sm text-center">Mensaje enviado correctamente</p>
        )}
        {estado === 'error' && (
          <p className="text-red-500 text-sm text-center">Algo salió mal, intenta de nuevo</p>
        )}
      </div>
    </div>
  )
}