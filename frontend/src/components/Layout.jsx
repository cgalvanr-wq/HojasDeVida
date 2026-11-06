import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Lleva a la sección (#integrantes, #contacto...) o sube al inicio al cambiar de página
function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollToHash />

      <header className="encabezado">
        <nav className="navegacion navbar navbar-expand-lg">
          <Link to="/" className="logo">Nuestro Equipo</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="menu collapse navbar-collapse justify-content-end" id="menuPrincipal">
            <Link to="/">Inicio</Link>
            <Link to="/#integrantes">Integrantes</Link>
            <Link to="/experiencias">Experiencias</Link>
            <Link to="/#contacto">Contacto</Link>
            <Link to="/admin">Administración</Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 - Hojas de Vida | Proyecto académico</p>
      </footer>
    </>
  )
}
