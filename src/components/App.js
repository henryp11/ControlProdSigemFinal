import React from "react";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"; //en version 6 de react-router-dom parece ya no uso switch sino el componente Routes
import Ordenes from "../pages/Ordenes";
import EditOT from "../pages/EditOT";
import Inventario from "../pages/Inventario";
import Pruebas from "../components/Pruebas";
import Login from "../pages/Login";
import ServiceRequester from "./ServiceRequester";
import Modal from "./Modal";
import ModalProcess from "./ModalProcess";
import Error from "../pages/Error";

// const subDominio = "moverprint";

function App() {
  return (
    <HashRouter basename="/moverprint">
      <Layout>
        <Routes>
          {/* el atributo component ya no existe en la version 6 de reac-router-dom cambia a "element" */}
          {/* En V6, ya no permite pasar el nombre del componente directo sino que debe ir como etiqueta */}
          {/* Ej: <Route exact path="/" element={<Login/>} /> */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/produccion" element={<Ordenes />} />
          <Route exact path="/produccion/:ordenId" element={<EditOT />} />
          <Route exact path="/inventario" element={<Inventario />} />
          <Route exact path="/inventario/:PtId" element={<Modal />} />
          <Route
            exact
            path="/produccion/:ordenId/:PtId"
            element={<ModalProcess />}
          />
          <Route exact path="/pruebas3" element={<Pruebas />} />
          <Route exact path="/pruebas2" element={<ServiceRequester />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
