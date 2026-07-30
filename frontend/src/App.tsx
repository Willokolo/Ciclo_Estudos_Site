import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pesquisa from './pages/Pesquisa'
import CriarTabela from './pages/CriarTabela'
import MostrarTabelas from './pages/MostrarTabelas'
import Login from './pages/Login'
import Registro from './pages/Registro'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Pesquisa />} />
        <Route path = "/CriarTabela" element = {<CriarTabela />} />
        <Route path = "/MostrarTabelas" element = {<MostrarTabelas />} />
        <Route path = "/Login" element = {<Login />} />
        <Route path = "/Registro" element = {<Registro />} />
      </Routes>
    </BrowserRouter>
  )
}