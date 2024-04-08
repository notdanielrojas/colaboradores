// Importar CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importar el gancho useState de React
import { useState } from "react";

// Importar el componente Listado
import Listado from "./assets/Components/Listado/Listado";

// Importar el componente Formulario
import Formulario from "./assets/Components/Formulario/Formulario";

// Importar el componente Buscador
import Buscador from "./assets/Components/Buscador/Buscador";

// Importar el componente Alerta
import Alerta from "./assets/Components/Alerta/Alerta";

// Importar BaseColaboradores desde el archivo JS
import { BaseColaboradores } from "./assets/JS/colaboradores";

// Importar estilos CSS personalizados
import "./index.css";

// Definir el componente App
function App() {
  // Definir variables de estado usando el gancho useState
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); // Estado para los colaboradores
  const [alertaFormulario, setAlertaFormulario] = useState({}); // Estado para las alertas del formulario
  const [alertaBusqueda, setAlertaBusqueda] = useState({}); // Estado para las alertas de búsqueda

  // Función para agregar un nuevo colaborador
  const agregarColaborador = (nuevoColaborador) => {
    // Agregar el nuevo colaborador a la lista de colaboradores
    setColaboradores([
      ...colaboradores,
      { id: colaboradores.length + 1, ...nuevoColaborador },
    ]);
    // Establecer mensaje de alerta de éxito
    setAlertaFormulario({
      variant: "success",
      message: "Colaborador agregado exitosamente",
    });
  };

  // Función para eliminar un colaborador
  const eliminarColaborador = (id) => {
    // Eliminar el colaborador con el id especificado de la lista
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
    // Establecer mensaje de alerta de peligro
    setAlertaFormulario({
      variant: "danger",
      message: "Colaborador eliminado exitosamente",
    });
  };

  // Función para buscar un colaborador
  const buscarColaborador = (query) => {
    if (!query) {
      // Si la consulta de búsqueda está vacía, establecer mensaje de alerta de peligro
      setAlertaBusqueda({
        variant: "danger",
        message: "Por favor ingresa un término de búsqueda",
      });
      return [];
    }
    // Filtrar la lista de colaboradores basada en la consulta de búsqueda
    const resultados = BaseColaboradores.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(query.toLowerCase())
    );
    if (resultados.length === 0) {
      // Si no se encuentran resultados, establecer mensaje de alerta de advertencia
      setAlertaBusqueda({
        variant: "warning",
        message: "No se encontraron colaboradores con ese término de búsqueda",
      });
    }
    // Actualizar la lista de colaboradores con los resultados de la búsqueda
    setColaboradores(resultados);
    // Limpiar las alertas después de buscar
    clearAlerts();
    return resultados;
  };

  // Función para limpiar todas las alertas
  const clearAlerts = () => {
    setAlertaFormulario({});
    setAlertaBusqueda({});
  };

  // Función para restablecer el listado original
  const resetListado = () => {
    setColaboradores(BaseColaboradores);
    clearAlerts();
  };

  // Renderizar el componente App
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center p-3 px-0'>
        <div className='col-lg-10'>
          <div className='card p-5'>
            <div className='row'>
              <div className='col-md-6 col-12'>
                {/* Renderizar el componente Buscador */}
                <Buscador
                  buscarColaborador={buscarColaborador}
                  clearAlerts={clearAlerts}
                  resetListado={resetListado}
                />
                {/* Renderizar la Alerta de Búsqueda si está presente */}
                {alertaBusqueda.message && (
                  <Alerta
                    variant={alertaBusqueda.variant}
                    message={alertaBusqueda.message}
                  />
                )}
                {/* Renderizar el componente Formulario */}
                <Formulario
                  agregarColaborador={agregarColaborador}
                  clearAlerts={clearAlerts}
                />
                {/* Renderizar la Alerta del Formulario si está presente */}
                {alertaFormulario.message && (
                  <Alerta
                    variant={alertaFormulario.variant}
                    message={alertaFormulario.message}
                  />
                )}
              </div>
              <div className='col-md-6 col-12'>
                {/* Renderizar el componente Listado */}
                <div className='table-responsive'>
                  <Listado
                    colaboradores={colaboradores}
                    eliminarColaborador={eliminarColaborador}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportar el componente App
export default App;
