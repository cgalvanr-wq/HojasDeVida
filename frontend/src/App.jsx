import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import HojaVidaAndreina from './pages/HojaVidaAndreina'
import HojaVidaCarmen from './pages/HojaVidaCarmen'
import Experiencias from './pages/Experiencias'
import Admin from './admin/Admin'
import NoEncontrada from './pages/NoEncontrada'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/hoja-vida-1" element={<HojaVidaAndreina />} />
        <Route path="/hoja-vida-2" element={<HojaVidaCarmen />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
