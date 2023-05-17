import { useState } from "react";
import Home from "./views/Home/Home";

import { Route, Routes } from "react-router-dom";
import Detail from "./views/Detail/Detail";

import InicioForm from "./views/Admin/InicioForm/InicioForm";
import Panel from "./views/Admin/Panel";
import axios from "axios";
import Navbar from "../src/component/navbar/Navbar.jsx";
axios.defaults.baseURL = "https://tu-mascota.up.railway.app";

//localStorage.removeItem("admin")
const acceso =
  localStorage.getItem("admin") === false ||
  localStorage.getItem("admin") === null
    ? false
    : true;

console.log("router >>>>> ", acceso);
acceso && window.location.pathname === "/admin"
  ? window.location.replace("http://localhost:5173/admin/panel")
  : null;

!acceso && window.location.pathname === "/admin/panel"
  ? window.location.replace("http://localhost:5173/admin")
  : null;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />

        {acceso ? (
          <Route exact path="/admin/panel" element={<Panel />} />
        ) : (
          <Route exact path="/admin" element={<InicioForm />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
