// Importar PropTypes desde React
import PropTypes from "prop-types";

// Importar el componente de Alerta de React Bootstrap
import Alert from "react-bootstrap/Alert";

// Definir el componente funcional Alerta
function Alerta({ variant, message }) {
  // Renderizar el componente Alert de React Bootstrap con el tipo de variante y el mensaje proporcionados
  return <Alert variant={variant}>{message}</Alert>;
}

// Definir propTypes para validar los tipos de las props
Alerta.propTypes = {
  variant: PropTypes.string.isRequired, // Propiedad variant debe ser de tipo string y requerida
  message: PropTypes.string.isRequired, // Propiedad message debe ser de tipo string y requerida
};

// Exportar el componente Alerta
export default Alerta;
