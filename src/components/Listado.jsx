import Table from 'react-bootstrap/Table'

const ListadoColaborador = ({ listado }) => {
  
  
  return (
    <div className="Form">
      <h3>Lista de Colaboradores</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th> 
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {listado.map((Listado) => 
          <tr key={Listado}>
            <td>{Listado.id}</td>
            <td>{Listado.nombre}</td>
            <td>{Listado.correo}</td>
            <td>{Listado.edad}</td>
            <td>{Listado.cargo}</td>
            <td>{Listado.telefono}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ListadoColaborador
