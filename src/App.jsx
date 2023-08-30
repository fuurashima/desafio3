import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alert from './components/Alert'
import Buscador from './components/Buscador'
import { BaseColaboradores } from './BaseColaboradores.js'
import './App.css'


function App() {
  const [baseDatos, setBaseDatos] = useState(BaseColaboradores)
  const [filtro, setFiltro] = useState('')
  const [alert, setAlert] = useState({error: '', msg: '', color:''})

  const agregar = (id, nombre, correo, edad, cargo, telefono) => {
    setBaseDatos([...baseDatos, {id:id, nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono }])
  }

  const filtrados = baseDatos.filter((col) => {
    return (
      col.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      col.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      col.edad.toLowerCase().includes(filtro.toLowerCase()) ||
      col.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      col.telefono.toLowerCase().includes(filtro.toLowerCase())
  )})

  return (
    <>
      <div className='contenedor'>
        <Buscador setFiltro={setFiltro} />

        <div className='m-5 subcontenedor'>
          <Listado listado={filtrados} />

          <Formulario  agregar={agregar} setAlert={setAlert} />
        </div>        
      </div>
    </>
  )
}

export default App
