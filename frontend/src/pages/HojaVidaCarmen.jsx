import { Link } from 'react-router-dom'

export default function HojaVidaCarmen() {
  return (
    <>
      <section className="cv-hero">
        <div className="cv-hero-contenido">
          <div className="cv-foto shadow">
            <img src="/img/persona2.jpg.jpeg" alt="Fotografía de Carmen Alicia Galván Ruiz" className="img-fluid" />
          </div>

          <div className="cv-presentacion">
            <p className="subtitulo">HOJA DE VIDA PROFESIONAL</p>
            <h1>Carmen Alicia Galván Ruiz</h1>
            <p className="cv-cargo">Estudiante de Ingeniería de Software</p>
            <p className="cv-intro">
              Estudiante de cuarto semestre de Ingeniería de Software
              en la Universidad de Cartagena, con formación como
              Técnica en Sistemas y Redes y Técnica en Atención
              Integral a la Primera Infancia. Cuenta además con
              experiencia en redacción,
              secretariado y participación en programas piloto del ICBF.
            </p>
            <div className="cv-contacto-mini">
              <span>📍 San Pelayo, Córdoba</span>
              <span>📞 300 000 0000</span>
              <span>✉ carmen.galvan@example.com</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-contenedor">
        <div className="cv-titulo">
          <p className="subtitulo">PERFIL PROFESIONAL</p>
          <h2>Sobre mí</h2>
        </div>
        <div className="cv-perfil-card card shadow-sm">
          <p>
            Soy una persona responsable, comprometida y con disposición
            para aprender y desarrollar nuevas habilidades. Actualmente
            soy estudiante de cuarto semestre de Ingeniería de Software
            en la Universidad de Cartagena, con formación técnica en
            Sistemas y Redes y en Atención Integral a la Primera Infancia.
          </p>
          <p>
            Mi formación académica y experiencia laboral me han permitido
            desarrollar habilidades en el manejo de herramientas
            informáticas, redacción, organización de información,
            secretariado y apoyo a diferentes procesos sociales.
          </p>
          <p>
            Me caracterizo por ser una persona responsable, organizada,
            comprometida y con disposición para aprender. Actualmente
            continúo fortaleciendo mis conocimientos en el área de
            tecnología y desarrollo de software mediante mi formación
            profesional.
          </p>
        </div>
      </section>

      <section className="cv-contenedor cv-fondo">
        <div className="cv-grid">
          <div className="cv-card card shadow-sm">
            <div className="cv-card-icon">🎓</div>
            <div className="cv-card-titulo">
              <p className="subtitulo">FORMACIÓN</p>
              <h2>Estudios académicos</h2>
            </div>

            <div className="cv-estudio">
              <span className="cv-fecha">ACTUALMENTE</span>
              <h3>Ingeniería de Software</h3>
              <p>Universidad de Cartagena</p>
              <small>Cuarto semestre</small>

              <span className="cv-fecha">2026</span>
              <h3>Técnico en Sistemas y Redes</h3>
              <p>Instituto Tecnológico San Agustín</p>
              <small>Graduada en 2024</small>
            </div>

            <div className="cv-estudio">
              <span className="cv-fecha">2018</span>
              <h3>Técnico en Atención Integral a la Primera Infancia</h3>
              <p>Instituto Tecnológico San Agustín</p>
              <small>Graduada en 2018</small>
            </div>

            <div className="cv-estudio">
              <span className="cv-fecha">2016</span>
              <h3>Bachiller Académico</h3>
              <p>I. E. Santa Teresita</p>
              <small>Graduación: 07 de diciembre de 2016</small>
            </div>
          </div>

          <div className="cv-card card shadow-sm">
            <div className="cv-card-icon">✦</div>
            <div className="cv-card-titulo">
              <p className="subtitulo">COMPETENCIAS</p>
              <h2>Habilidades</h2>
            </div>

            <div className="cv-habilidades">
              <span>Responsabilidad</span>
              <span>Organización</span>
              <span>Trabajo en equipo</span>
              <span>Comunicación</span>
              <span>Redacción</span>
              <span>Manejo de información</span>
              <span>Atención al público</span>
              <span>Adaptabilidad</span>
              <span>Compromiso</span>
              <span>Aprendizaje continuo</span>
            </div>

            <div className="cv-area">
              <p className="subtitulo">ÁREAS DE CONOCIMIENTO</p>
              <div className="cv-tags">
                <span>Sistemas y redes</span>
                <span>Herramientas informáticas</span>
                <span>Atención a la primera infancia</span>
                <span>Redacción</span>
                <span>Secretariado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-contenedor">
        <div className="cv-titulo">
          <p className="subtitulo">EXPERIENCIA PROFESIONAL</p>
          <h2>Trayectoria laboral</h2>
        </div>

        <div className="cv-grid">
          <div className="cv-card card shadow-sm">
            <div className="cv-card-icon">💼</div>
            <span className="cv-fecha">2025</span>
            <h2>Redacción y Secretariado</h2>
            <p className="cv-texto-suave">
              Experiencia relacionada con labores de redacción
              y secretariado para médico ortopedista.
            </p>
            <div className="cv-area">
              <p className="subtitulo">ÁREAS DE TRABAJO</p>
              <div className="cv-tags">
                <span>Redacción</span>
                <span>Secretariado</span>
                <span>Organización de información</span>
              </div>
            </div>
          </div>

          <div className="cv-card card shadow-sm">
            <div className="cv-card-icon"></div>
            <span className="cv-fecha">2020 - 2024</span>
            <h2>Programas piloto del ICBF</h2>
            <p className="cv-texto-suave">
              Participación en programas pilotos desarrollados
              en el marco de iniciativas del Instituto Colombiano
              de Bienestar Familiar (ICBF).
            </p>
            <div className="cv-area">
              <p className="subtitulo">PARTICIPACIÓN</p>
              <div className="cv-tags">
                <span>2020</span>
                <span>2024</span>
                <span>Programas sociales</span>
                <span>Trabajo con comunidades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-contenedor cv-fondo">
        <div className="cv-grid cv-grid-3">
          <div className="cv-card cv-card-pequena card shadow-sm">
            <div className="cv-card-icon">🌐</div>
            <p className="subtitulo">IDIOMAS</p>
            <h2>Idiomas</h2>
            <div className="cv-idioma">
              <div>
                <strong>Español</strong>
                <small>Idioma nativo</small>
              </div>
              <span>Nativo</span>
            </div>
          </div>

          <div className="cv-card cv-card-pequena card shadow-sm">
            <div className="cv-card-icon">💻</div>
            <p className="subtitulo">PERFIL TECNOLÓGICO</p>
            <h2>Área tecnológica</h2>
            <div className="cv-tags">
              <span>Sistemas</span>
              <span>Redes</span>
              <span>Herramientas informáticas</span>
              <span>Soporte tecnológico</span>
            </div>
          </div>

          <div className="cv-card cv-card-pequena card shadow-sm">
            <div className="cv-card-icon">✓</div>
            <p className="subtitulo">REFERENCIAS</p>
            <h2>Referencias</h2>
            <p className="cv-referencia">Disponibles a solicitud.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="cv-final">
        <h2>Gracias por visitar mi perfil</h2>
        <p>Conoce también el perfil de nuestra primera integrante.</p>
        <div className="cv-botones">
          <Link to="/" className="boton btn btn-primary">Volver al inicio</Link>
        </div>
      </section>
    </>
  )
}
