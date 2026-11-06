import { useState } from 'react'
import { Link } from 'react-router-dom'

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Mismas reglas y mensajes de js/validacion.js (Unidad 2)
const reglas = {
  nombre: (v) => (v.trim() === '' ? 'El nombre es obligatorio.' : ''),
  correo: (v) => {
    if (v.trim() === '') return 'El correo es obligatorio.'
    if (!REGEX_CORREO.test(v.trim())) return 'Ingresa un correo electrónico válido.'
    return ''
  },
  mensaje: (v) => (v.trim() === '' ? 'El mensaje es obligatorio.' : ''),
}

const vacio = { nombre: '', correo: '', mensaje: '' }

export default function Inicio() {
  const [valores, setValores] = useState(vacio)
  const [errores, setErrores] = useState(vacio)
  const [exito, setExito] = useState(false)

  const cambiar = (e) => {
    const { id, value } = e.target
    setValores({ ...valores, [id]: value })
    // En tiempo real: solo limpia o actualiza el error del campo que se escribe
    if (errores[id] !== '' || id === 'correo') setErrores({ ...errores, [id]: reglas[id](value) })
  }

  const salir = (e) => setErrores({ ...errores, [e.target.id]: reglas[e.target.id](e.target.value) })

  const enviar = (e) => {
    e.preventDefault()
    setExito(false)
    const nuevos = {
      nombre: reglas.nombre(valores.nombre),
      correo: reglas.correo(valores.correo),
      mensaje: reglas.mensaje(valores.mensaje),
    }
    setErrores(nuevos)
    if (!nuevos.nombre && !nuevos.correo && !nuevos.mensaje) {
      setExito(true)
      setValores(vacio)
    }
  }

  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-contenido">
          <p className="subtitulo">HOJAS DE VIDA PROFESIONALES</p>
          <h1>
            Conoce nuestro<br />
            <span>perfil profesional</span>
          </h1>
          <p className="descripcion">
            Un espacio creado para presentar nuestra formación,
            experiencia, habilidades y proyectos profesionales.
          </p>
          <a href="#integrantes" className="boton btn btn-primary">Conócenos</a>
        </div>
      </section>

      <section id="integrantes" className="integrantes">
        <div className="titulo-seccion">
          <p className="subtitulo">NUESTRO EQUIPO</p>
          <h2>Conoce nuestras hojas de vida</h2>
          <p>
            Selecciona un perfil para conocer más sobre nuestra
            trayectoria académica y profesional.
          </p>
        </div>

        <div className="tarjetas">
          <article className="tarjeta card shadow-sm">
            <div className="foto">
              <img src="/img/persona1.jpeg" alt="Fotografía de Andreina Beleño" />
            </div>
            <div className="informacion card-body">
              <p className="cargo">ESTUDIANTE</p>
              <h3 className="card-title">Andreina Beleño</h3>
              <p className="card-text">
                Conoce mi formación académica, experiencia,
                habilidades y perfil profesional.
              </p>
              <Link to="/hoja-vida-1" className="boton btn btn-primary">Ver hoja de vida</Link>
            </div>
          </article>

          <article className="tarjeta card shadow-sm">
            <div className="foto">
              <img src="/img/persona2.jpg.jpeg" alt="Fotografía de Carmen Alicia Galván Ruiz" />
            </div>
            <div className="informacion card-body">
              <p className="cargo">ESTUDIANTE</p>
              <h3 className="card-title">Carmen Galván</h3>
              <p className="card-text">
                Conoce mi formación académica, experiencia,
                habilidades y perfil profesional.
              </p>
              <Link to="/hoja-vida-2" className="boton btn btn-primary">Ver hoja de vida</Link>
            </div>
          </article>
        </div>
      </section>

      <section id="contacto" className="contacto">
        <p className="subtitulo">CONTACTO</p>
        <h2>Conecta con nosotros</h2>
        <p>Déjanos tus datos y tu mensaje. Te contactaremos próximamente.</p>

        <div className="container mt-4">
          <form
            id="formularioContacto"
            className="card shadow-sm p-4 mx-auto"
            style={{ maxWidth: 700 }}
            onSubmit={enviar}
            noValidate
          >
            <div className="mb-3 text-start">
              <label htmlFor="nombre" className="form-label">Nombre completo</label>
              <input type="text" className="form-control" id="nombre" placeholder="Escribe tu nombre"
                     value={valores.nombre} onChange={cambiar} onBlur={salir} />
              <div className="text-danger mt-1">{errores.nombre}</div>
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="correo" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="correo" placeholder="ejemplo@correo.com"
                     value={valores.correo} onChange={cambiar} onBlur={salir} />
              <div className="text-danger mt-1">{errores.correo}</div>
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje"
                        value={valores.mensaje} onChange={cambiar} onBlur={salir}></textarea>
              <div className="text-danger mt-1">{errores.mensaje}</div>
            </div>

            <button type="submit" className="boton btn btn-primary">Enviar mensaje</button>

            {exito && (
              <div className="alert alert-success mt-3" role="alert">
                ¡Mensaje enviado correctamente!
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
