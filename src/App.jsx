import "./App.css";
import Navegacion from "./componentes/navbar/Navegacion";
import { Route, Routes } from "react-router-dom";

import PaginaPrincipal from "./vistas/PaginaPrincipal";
import PaginaContacto from "./vistas/PaginaContacto";
import NoEncontrado from "./vistas/NoEncontrado";

function App() {
  return (
    <>
      <div>
        <Navegacion />
      </div>
      <div className="app-routes">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/contacto" element={<PaginaContacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
