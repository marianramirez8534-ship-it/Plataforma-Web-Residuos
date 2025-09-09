import React from "react";

function ReporteIncidencias() {
  return (
    <div>
      <h2>Reporte de Incidencias</h2>
      <textarea 
        placeholder="Escribe aquí tu reporte" 
        value="Ejemplo de incidencia: basura acumulada en la esquina de la calle X" 
        readOnly 
      />
      <button className="btn-incidencias" disabled>Enviar</button>

      <div style={{ marginTop: "20px" }}>

        <h3>Reportes enviados:</h3>
        <ul>
          <li>1.Basura acumulada en la calle A</li>
          <li>2.Contenedor con exceso de residuos en la calle B</li>
          <li>3.Horario de recolección no respetado en calle C</li>
          <li>4.Contenedor de residuos roto en la calle D</li>
        </ul>
      </div>
    </div>
  );
}

export default ReporteIncidencias;
