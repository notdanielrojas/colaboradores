// Importar PropTypes para la validación de tipos
import PropTypes from "prop-types";

// Importar componentes de Bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// Definir el componente funcional Listado
function Listado({ colaboradores, eliminarColaborador }) {
  // Componente funcional para mostrar el listado de colaboradores
  return (
    <div className='table-responsive'>
      {/* Hacer la tabla responsive */}
      {/* Tabla para mostrar los colaboradores */}
      <Table striped bordered hover responsive>
        {/* Agregar la clase responsive para que la tabla sea vertical en dispositivos pequeños */}
        <thead>
          <tr>
            {/* Encabezados de las columnas */}
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th> {/* Nueva columna para botones de acción */}
          </tr>
        </thead>
        <tbody>
          {/* Iterar sobre la lista de colaboradores para mostrar cada uno */}
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              {/* Mostrar los detalles de cada colaborador en una fila */}
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                {/* Botón para eliminar el colaborador */}
                <Button
                  variant='danger'
                  onClick={() => eliminarColaborador(colaborador.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

// Definir propTypes para las propiedades requeridas
Listado.propTypes = {
  colaboradores: PropTypes.array.isRequired, // Array de colaboradores
  eliminarColaborador: PropTypes.func.isRequired, // Función para eliminar un colaborador
};

// Exportar el componente Listado
export default Listado;
