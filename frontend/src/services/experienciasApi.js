// URL de la API de la Unidad 3 (Express + MongoDB). Se puede cambiar en frontend/.env con VITE_API_URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/experiencias'

async function responder(res) {
  const datos = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(datos.error || 'Error en la petición a la API')
  return datos
}

const conCuerpo = (metodo, cuerpo) => ({
  method: metodo,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cuerpo),
})

export const listarExperiencias = () => fetch(API_URL).then(responder)
export const crearExperiencia = (datos) => fetch(API_URL, conCuerpo('POST', datos)).then(responder)
export const actualizarExperiencia = (id, datos) =>
  fetch(`${API_URL}/${id}`, conCuerpo('PUT', datos)).then(responder)
export const eliminarExperiencia = (id) => fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(responder)
