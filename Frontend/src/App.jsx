import { useState } from "react";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/Detail/Detail";
import Navbar from "./component/navbar/navbar";

import InicioForm from "./views/Admin/InicioForm/InicioForm";
import Panel from "./views/Admin/Panel";

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
        <Route exact path="/" element={<Landing />} />
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
