import { useEffect, useState } from 'react'
import { listarExperiencias } from '../services/experienciasApi'

export default function Experiencias() {
  const [experiencias, setExperiencias] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    listarExperiencias()
      .then(setExperiencias)
      .catch(() => setError('No se pudo conectar con la API. Verifica que el backend esté encendido.'))
      .finally(() => setCargando(false))
  }, [])

  return (
    <section className="cv-contenedor">
      <div className="cv-titulo">
        <p className="subtitulo">EXPERIENCIA PROFESIONAL</p>
        <h2>Experiencias registradas</h2>
      </div>

      {cargando && <p className="text-center">Cargando experiencias...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!cargando && !error && experiencias.length === 0 && (
        <div className="alert alert-info">Aún no hay experiencias registradas.</div>
      )}

      <div className="cv-grid">
        {experiencias.map((e) => (
          <div className="cv-card card shadow-sm" key={e._id}>
            <div className="cv-card-icon">💼</div>
            <span className="cv-fecha">{e.anio}</span>
            <h2>{e.cargo}</h2>
            <p className="cv-texto-suave">{e.empresa}</p>
            <p>{e.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
