const Buscador = ({ setFiltro }) => {
  return (
    <>
    <div className="container">
    <h3>Filtro de Usuarios</h3>
    <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setFiltro(e.target.value) }
      />
    </div>
    </>
  )
}

export default Buscador
