import { useEffect, useState } from 'react'
import {
  listarExperiencias,
  crearExperiencia,
  actualizarExperiencia,
  eliminarExperiencia,
} from '../services/experienciasApi'
import ExperienciaForm from './ExperienciaForm'

export default function Admin() {
  const [experiencias, setExperiencias] = useState([])
  const [editando, setEditando] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')
  const [aviso, setAviso] = useState('')

  const MSG_SIN_API = 'No se pudo conectar con la API. Enciende el backend con: node server.js'

  // Recarga la tabla después de crear, editar o eliminar
  const cargar = async () => {
    try {
      setExperiencias(await listarExperiencias())
    } catch {
      setError(MSG_SIN_API)
    }
  }

  // Carga inicial
  useEffect(() => {
    let activo = true
    listarExperiencias()
      .then((datos) => activo && setExperiencias(datos))
      .catch(() => activo && setError(MSG_SIN_API))
      .finally(() => activo && setCargando(false))
    return () => {
      activo = false
    }
  }, [])

  // Devuelve true si guardó bien (el formulario lo usa para limpiarse)
  const guardar = async (datos) => {
    setGuardando(true)
    setError('')
    try {
      const r = editando
        ? await actualizarExperiencia(editando._id, datos)
        : await crearExperiencia(datos)
      setAviso(r.mensaje)
      setEditando(null)
      await cargar()
      return true
    } catch (e) {
      setError(e.message)
      return false
    } finally {
      setGuardando(false)
    }
  }

  const borrar = async (exp) => {
    if (!window.confirm(`¿Eliminar la experiencia en "${exp.empresa}"?`)) return
    setError('')
    try {
      const r = await eliminarExperiencia(exp._id)
      setAviso(r.mensaje)
      if (editando?._id === exp._id) setEditando(null)
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <section className="cv-contenedor">
      <div className="cv-titulo">
        <p className="subtitulo">ESPACIO ADMINISTRATIVO</p>
        <h2>Gestión de experiencias profesionales</h2>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {aviso && (
        <div className="alert alert-success alert-dismissible" role="alert">
          {aviso}
          <button type="button" className="btn-close" aria-label="Cerrar" onClick={() => setAviso('')}></button>
        </div>
      )}

      <ExperienciaForm
        key={editando?._id ?? 'nueva'}
        experiencia={editando}
        onGuardar={guardar}
        onCancelar={() => setEditando(null)}
        guardando={guardando}
      />

      <div className="card shadow-sm p-3">
        {cargando ? (
          <p className="text-center mb-0">Cargando experiencias...</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped admin-tabla mb-0">
              <thead>
                <tr>
                  <th>Empresa</th>
                  <th>Cargo</th>
                  <th>Año</th>
                  <th>Descripción</th>
                  <th style={{ width: 170 }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {experiencias.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">No hay experiencias registradas</td>
                  </tr>
                )}
                {experiencias.map((e) => (
                  <tr key={e._id}>
                    <td>{e.empresa}</td>
                    <td>{e.cargo}</td>
                    <td>{e.anio}</td>
                    <td>{e.descripcion}</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2" onClick={() => { setEditando(e); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        Editar
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => borrar(e)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
