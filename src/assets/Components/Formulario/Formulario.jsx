// Importar el gancho useState de React
import { useState } from "react";

// Importar PropTypes para la validación de tipos
import PropTypes from "prop-types";

// Importar el componente de Alerta
import Alerta from "../Alerta/Alerta";

// Definir el componente funcional Formulario
function Formulario({ agregarColaborador, clearAlerts }) {
  // Definir estados para los campos del formulario y la alerta del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [formularioAlerta, setFormularioAlerta] = useState({});

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que todos los campos del formulario estén completos
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setFormularioAlerta({
        variant: "danger",
        message: "Por favor completa todos los campos",
      });
    } else {
      // Si los campos están completos, agregar el colaborador
      agregarColaborador({ nombre, correo, edad, cargo, telefono });
      // Limpiar los campos del formulario y la alerta
      setNombre("");
      setCorreo("");
      setEdad("");
      setCargo("");
      setTelefono("");
      setFormularioAlerta({
        variant: "success",
        message: "Colaborador agregado exitosamente",
      });
      clearAlerts();
    }
  };

  return (
    <div>
      {/* Título del formulario */}
      <h2 className='my-'>Agregar Colaborador</h2>
      <hr />

      {/* Formulario para agregar un nuevo colaborador */}
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div className='form-group'>
          <label>Nombre:</label>
          <input
            type='text'
            className='form-control'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Correo:</label>
          <input
            type='email'
            className='form-control'
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Edad:</label>
          <input
            type='number'
            className='form-control'
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Cargo:</label>
          <input
            type='text'
            className='form-control'
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Teléfono:</label>
          <input
            type='tel'
            className='form-control'
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        {/* Botón para enviar el formulario */}
        <button type='submit' className='btn btn-success my-3'>
          Agregar Colaborador
        </button>
        {/* Mostrar alerta si hay un mensaje */}
        {formularioAlerta.message && (
          <Alerta
            variant={formularioAlerta.variant}
            message={formularioAlerta.message}
          />
        )}
      </form>
    </div>
  );
}

// Definir propTypes para las funciones requeridas
Formulario.propTypes = {
  agregarColaborador: PropTypes.func.isRequired,
  clearAlerts: PropTypes.func.isRequired,
};

// Exportar el componente Formulario
export default Formulario;
