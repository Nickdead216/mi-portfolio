import { render, screen } from '@testing-library/react'

function HomeSimple() {
  return (
    <div>
      <h1>Hola, soy Nicolás</h1>
      <p>Fullstack Developer · React · Django · Python</p>
    </div>
  )
}

describe('Página de inicio', () => {
  it('muestra el nombre de Nicolás', () => {
    render(<HomeSimple />)
    expect(screen.getByText(/nicolás/i)).toBeInTheDocument()
  })

  it('muestra el título de desarrollador', () => {
    render(<HomeSimple />)
    expect(screen.getByText(/fullstack developer/i)).toBeInTheDocument()
  })
})