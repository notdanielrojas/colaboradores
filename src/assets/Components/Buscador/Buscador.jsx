// Importar useState y PropTypes desde React
import { useState } from "react";
import PropTypes from "prop-types";

// Importar el componente de Alerta
import Alerta from "../Alerta/Alerta";

// Definir el componente funcional Buscador
function Buscador({ buscarColaborador, clearAlerts, resetListado }) {
  // Definir estados para la consulta de búsqueda y las alertas
  const [query, setQuery] = useState("");
  const [busquedaAlerta, setBusquedaAlerta] = useState({});

  // Función para manejar el envío del formulario de búsqueda
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (!query) {
      // Si la consulta de búsqueda está vacía
      setBusquedaAlerta({
        variant: "danger",
        message: "Por favor ingresa un término de búsqueda",
      });
      return; // Salir de la función
    }
    const resultados = buscarColaborador(query); // Realizar la búsqueda con la consulta ingresada
    setQuery(""); // Limpiar la consulta después de enviar el formulario
    clearAlerts(); // Limpiar todas las alertas
    if (resultados.length === 0) {
      // Si no se encuentran resultados
      setBusquedaAlerta({
        variant: "warning",
        message: "No se encontraron colaboradores con ese término de búsqueda",
      });
    }
  };

  // Función para manejar el restablecimiento del listado
  const handleReset = () => {
    clearAlerts(); // Limpiar las alertas al restablecer
    resetListado(); // Restablecer el listado original
    setQuery(""); // Limpiar la consulta después de restablecer el listado
  };

  // Renderizar el componente Buscador
  return (
    <div className='buscador'>
      <h2>Buscador Colaborador</h2>
      <hr />
      <form onSubmit={handleSubmit} className='mb-3'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Buscar por nombre, correo, edad, cargo o teléfono'
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Actualizar la consulta al cambiar el valor del campo de entrada
          />
        </div>
        <button type='submit' className='btn btn-success my-3'>
          Buscar
        </button>
        <button
          type='button'
          className='btn btn-danger my-3 mx-2'
          onClick={handleReset} // Manejar el evento onClick para restablecer el listado
        >
          Restablecer
        </button>
        {/* Renderizar la Alerta de Búsqueda si está presente */}
        {busquedaAlerta.message && (
          <Alerta
            variant={busquedaAlerta.variant}
            message={busquedaAlerta.message}
          />
        )}
      </form>
    </div>
  );
}

// Definir propTypes para validar los tipos de las props
Buscador.propTypes = {
  buscarColaborador: PropTypes.func.isRequired, // Función para buscar colaboradores
  clearAlerts: PropTypes.func.isRequired, // Función para limpiar las alertas
  resetListado: PropTypes.func.isRequired, // Función para restablecer el listado
};

// Exportar el componente Buscador
export default Buscador;
