import { useState } from 'react'

const vacio = { empresa: '', cargo: '', anio: '', descripcion: '' }

function validar(v) {
  const e = {}
  const maximo = new Date().getFullYear() + 1
  const anio = Number(v.anio)
  if (!v.empresa.trim()) e.empresa = 'La empresa es obligatoria.'
  if (!v.cargo.trim()) e.cargo = 'El cargo es obligatorio.'
  if (!Number.isInteger(anio) || anio < 1950 || anio > maximo) e.anio = `Escribe un año entre 1950 y ${maximo}.`
  if (!v.descripcion.trim()) e.descripcion = 'La descripción es obligatoria.'
  return e
}

export default function ExperienciaForm({ experiencia, onGuardar, onCancelar, guardando }) {
  // Al elegir "Editar", Admin vuelve a crear este formulario (con key) y arranca con los datos de esa experiencia
  const [valores, setValores] = useState(
    experiencia ? { ...vacio, ...experiencia, anio: String(experiencia.anio ?? '') } : vacio
  )
  const [errores, setErrores] = useState({})

  const cambiar = (e) => setValores({ ...valores, [e.target.name]: e.target.value })

  const enviar = async (e) => {
    e.preventDefault()
    const err = validar(valores)
    setErrores(err)
    if (Object.keys(err).length > 0) return

    const guardado = await onGuardar({
      empresa: valores.empresa.trim(),
      cargo: valores.cargo.trim(),
      anio: Number(valores.anio),
      descripcion: valores.descripcion.trim(),
    })
    if (guardado && !experiencia) setValores(vacio)
  }

  const clase = (campo) => 'form-control' + (errores[campo] ? ' is-invalid' : '')

  return (
    <form onSubmit={enviar} noValidate className="card shadow-sm p-4 mb-4">
      <h3 className="mb-3">{experiencia ? 'Editar experiencia' : 'Nueva experiencia'}</h3>

      <div className="row g-3 text-start">
        <div className="col-md-5">
          <label htmlFor="empresa" className="form-label">Empresa</label>
          <input id="empresa" name="empresa" className={clase('empresa')} value={valores.empresa} onChange={cambiar} />
          <div className="invalid-feedback">{errores.empresa}</div>
        </div>
        <div className="col-md-5">
          <label htmlFor="cargo" className="form-label">Cargo</label>
          <input id="cargo" name="cargo" className={clase('cargo')} value={valores.cargo} onChange={cambiar} />
          <div className="invalid-feedback">{errores.cargo}</div>
        </div>
        <div className="col-md-2">
          <label htmlFor="anio" className="form-label">Año</label>
          <input id="anio" name="anio" type="number" className={clase('anio')} value={valores.anio} onChange={cambiar} />
          <div className="invalid-feedback">{errores.anio}</div>
        </div>
        <div className="col-12">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea id="descripcion" name="descripcion" rows="3" className={clase('descripcion')}
                    value={valores.descripcion} onChange={cambiar}></textarea>
          <div className="invalid-feedback">{errores.descripcion}</div>
        </div>
      </div>

      <div className="mt-3 d-flex gap-2">
        <button type="submit" className="boton btn btn-primary" disabled={guardando}>
          {guardando ? 'Guardando...' : experiencia ? 'Actualizar' : 'Crear experiencia'}
        </button>
        {experiencia && (
          <button type="button" className="btn btn-outline-secondary" onClick={onCancelar}>Cancelar</button>
        )}
      </div>
    </form>
  )
}
