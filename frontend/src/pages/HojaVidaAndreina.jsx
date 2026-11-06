import { Link } from 'react-router-dom'

export default function HojaVidaAndreina() {
  return (
    <>
      <section className="cv-hero">
        <div className="cv-hero-contenido">
          <div className="cv-foto shadow">
            <img src="/img/persona1.jpeg" alt="Fotografía de Andreina Beleño" className="img-fluid" />
          </div>

          <div className="cv-presentacion">
            <p className="subtitulo">HOJA DE VIDA</p>
            <h1>Andreina <span>Beleño</span></h1>
            <p className="cv-cargo">Estudiante de Ingeniería de Software</p>
            <p className="cv-intro">
              Estudiante de Ingeniería de Software interesada en
              fortalecer sus conocimientos en desarrollo tecnológico,
              programación y creación de soluciones digitales.
            </p>
            <div className="cv-contacto-mini">
              <span>📍 Montería, Colombia</span>
              <span>✉️ andreina@email.com</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-contenedor">
        <div className="cv-titulo">
          <p className="subtitulo">PERFIL</p>
          <h2>Sobre mí</h2>
        </div>
        <div className="cv-perfil-card card shadow-sm">
          <p>
            Soy estudiante de Ingeniería de Software, con interés
            en el área de la tecnología y el desarrollo de soluciones
            informáticas.
          </p>
          <p>
            Me interesa continuar fortaleciendo mis conocimientos
            en programación, bases de datos, desarrollo web y
            herramientas tecnológicas que permitan solucionar
            necesidades reales.
          </p>
          <p>
            Me caracterizo por mi disposición para aprender,
            trabajar en equipo y asumir nuevos retos académicos
            y profesionales.
          </p>
        </div>
      </section>

      <section className="cv-contenedor cv-fondo">
        <div className="cv-grid">
          <div className="cv-card card shadow-sm">
            <div className="cv-card-icon">🎓</div>
            <div className="cv-card-titulo">
              <h2>Formación académica</h2>
            </div>

            <div className="cv-estudio">
              <span className="cv-fecha">ACTUALIDAD</span>
              <h3>Ingeniería de Software</h3>
              <p>Universidad de Cartagena</p>
              <small>Formación profesional</small>
            </div>

            <div className="cv-estudio">
              <span className="cv-fecha">FORMACIÓN</span>
              <h3>Formación académica complementaria</h3>
              <p>Cursos y aprendizaje continuo</p>
              <small>Fortalecimiento de competencias profesionales</small>
            </div>
          </div>

          <div className="cv-card card shadow-sm">
            <div className="cv-card-icon">💻</div>
            <div className="cv-card-titulo">
              <h2>Competencias</h2>
            </div>

            <div className="cv-habilidades">
              <span>Trabajo en equipo</span>
              <span>Comunicación</span>
              <span>Responsabilidad</span>
              <span>Organización</span>
              <span>Aprendizaje continuo</span>
              <span>Adaptabilidad</span>
            </div>

            <div className="cv-area">
              <h3>Área de interés</h3>
              <div className="cv-tags">
                <span>Desarrollo Web</span>
                <span>Programación</span>
                <span>Bases de Datos</span>
                <span>Tecnología</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-contenedor">
        <div className="cv-grid cv-grid-3">
          <div className="cv-card cv-card-pequena card shadow-sm">
            <div className="cv-card-icon">💼</div>
            <h2>Experiencia</h2>
            <p className="cv-texto-suave">
              Experiencia y actividades relacionadas con el
              desarrollo de competencias profesionales.
            </p>
            <div className="cv-estudio">
              <span className="cv-fecha">EXPERIENCIA</span>
              <h3>Desarrollo profesional</h3>
              <p>Actividades académicas y profesionales</p>
              <small>
                Participación en diferentes proyectos y procesos
                de aprendizaje.
              </small>
            </div>
          </div>

          <div className="cv-card cv-card-pequena card shadow-sm">
            <div className="cv-card-icon">🌎</div>
            <h2>Idiomas</h2>
            <div className="cv-idioma">
              <div>
                <strong>Español</strong>
                <small>Lengua materna</small>
              </div>
              <span>Nativo</span>
            </div>
            <div className="cv-idioma">
              <div>
                <strong>Inglés</strong>
                <small>Nivel académico</small>
              </div>
              <span>Básico</span>
            </div>
          </div>

          <div className="cv-card cv-card-pequena card shadow-sm">
            <div className="cv-card-icon">📋</div>
            <h2>Referencias</h2>
            <p className="cv-texto-suave">
              Las referencias personales y profesionales pueden ser
              suministradas cuando sean solicitadas.
            </p>
            <div className="cv-referencia">
              <strong>Referencias disponibles</strong>
              <br />
              Información suministrada
              bajo solicitud.
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="cv-final">
        <p className="subtitulo">CONTACTO</p>
        <h2>¿Quieres conocer más?</h2>
        <p>
          Puedes regresar a la página principal para conocer
          el perfil de los demás integrantes.
        </p>
        <div className="cv-botones">
          <Link to="/" className="boton btn btn-primary">Volver al inicio</Link>
        </div>
      </section>
    </>
  )
}
