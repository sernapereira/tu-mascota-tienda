import { useState } from "react";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/Detail/Detail";
import Navbar from "./component/navbar/navbar";
import Admin from "./views/Admin/admin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/detail/:id" element={<Detail />} />

        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
