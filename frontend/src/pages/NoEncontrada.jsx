import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section className="cv-final">
      <p className="subtitulo">ERROR 404</p>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <div className="cv-botones">
        <Link to="/" className="boton btn btn-primary">Volver al inicio</Link>
      </div>
    </section>
  )
}
