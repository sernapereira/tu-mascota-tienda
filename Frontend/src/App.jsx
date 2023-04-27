import { useState } from "react";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
