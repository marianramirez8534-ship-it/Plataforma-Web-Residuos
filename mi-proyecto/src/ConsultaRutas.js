import React from "react";

function ConsultaRutas() {
  return (
    <div>
      <h2>Consulta de Rutas y Horarios</h2>
      <input 
        type="text" 
        placeholder="Ingresa tu zona" 
        value="Zona 1" 
        readOnly 
      />
      <button disabled>Consultar</button>

      <p className="resultado">
        La recolección de basura en la zona "Zona 1" es Lunes, Miércoles y Viernes a las 8:00 AM.
      </p>
    </div>
  );
}

export default ConsultaRutas;

