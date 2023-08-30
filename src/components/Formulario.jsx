import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Formulario = ({ agregar, setAlert }) => {
  const [id, setid] = useState('')
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')

  const enviarDatos = (e) => {
    e.preventDefault()

    if (id === '' || nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '' ) {
      setAlert({
        error: true,
        msg: 'Debes llenar todos los datos',
        color: 'danger'
      })
      return;
    }

    agregar(id, nombre, correo, edad, cargo, telefono)

    setid('')
    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')
    // setError(false)


    setAlert({
      error: false,
      msg: 'Usuario añadido',
      color: 'success'
    })
  }

  return (
    <div>
      <h3>Formulario</h3>

      <form className='registro' onSubmit={(e) => enviarDatos(e)}>

        <div className='form-group'>
          <input
          className='form-control'
          type='text'
          name='id'
          placeholder='id'
          onChange={(e) => setid(e.target.value)}
          value={id}
        />
        </div>
        

        <div className='form-group'>
        <input
          className='form-control'
          type='text'
          name='nombre'
          placeholder='nombre'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        </div>

        <div className='form-group'>
        <input
          className='form-control'
          type='email'
          name='correo'
          placeholder='correo'
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
        />
        </div>

        <div className='form-group'>
        <input
          className='form-control'
          type='number'
          name='edad'
          min='18'
          placeholder='edad'
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        </div>

        <div className='form-group'>
        <input
          className='form-control'
          type='text'
          name='cargo'
          placeholder='cargo'
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
        </div>

        <div className='form-group'>
        <input
          className='form-control'
          type="number"
          name='telefono'
          placeholder='telefono'
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        </div>       


        <Button type='submit' variant='primary' >Agregar</Button>
        
      </form>
    
    </div>
  )
}

export default Formulario
