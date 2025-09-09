import React from "react";
import ConsultaRutas from "./ConsultaRutas";
import ReporteIncidencias from "./ReporteIncidencias";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Plataforma de Gestión Eficiente de Residuos para Comunidades Sustentables</h1>
      <div className="card">
        <ConsultaRutas />
      </div>
      <div className="card">
        <ReporteIncidencias />
      </div>
    </div>
  );
}

export default App;