import { useState } from "react";
import PostRaza from "./PostRaza/PostRaza";

const Race = () => {
  const [agregar, setAgregar] = useState(false);
  const [actualizar, setActualizar] = useState(false);

  const openComponen = (event) => {
    const value = event.target.value;

    switch (value) {
      case "agregar":
        return setAgregar(true), setActualizar(false);
      case "actualizar":
        return setAgregar(false), setActualizar(true);

      default:
        break;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={(e) => openComponen(e)} value="agregar">
          Agregar raza
        </button>
        <button onClick={(e) => openComponen(e)} value="actualizar">
          Actualizar
        </button>
      </nav>
     {
      (agregar && <PostRaza/>) || (actualizar && <h2>actualizar</h2>)
     }
    </div>
  );
};

export default Race;
