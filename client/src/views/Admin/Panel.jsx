import { useState } from "react";
import DetailAdmin from "./DetailAdmin/DetailAdmin";
import style from "./Panel.module.css";
import Race from "./Race/Race";
import Promo from "./Promociones/Promo";

const Panel = () => {
  const cerrarHandler = () => {
    localStorage.removeItem("admin");
    window.location.replace("https://tu-mascota-tienda-git-main-serna7a-gmailcom.vercel.app/admin");
  };

  //================= Estados =======================

  const [Detail, setDetail] = useState(false);
  const [race, setRace] = useState(false);
  const [promo, setPromo] = useState(false);

  ///////////////////////////////////////////////

  const openDetail = () => {
    setDetail(true);
    setRace(false);
    setPromo(false);
  };

  const openRace = () => {
    setRace(true);
    setDetail(false);
    setPromo(false);
  };

  const openPromo = () => {
    setPromo(true);
    setRace(false);
    setDetail(false);
  };

  ///////////////////////////////////////////////

  const closePanel = () => {
    setDetail(false);
    setRace(false);
    setPromo(false);
  };

  //////////////////////////////////////////////////////

  return (
    <div className={style.container}>
      <div className={style.panel}>
        <h2>Panel de control</h2>
        <button
          className={style.panel__botonClose}
          onClick={(e) => cerrarHandler(e)}
        >
          {" "}
          Cerrar Seccion{" "}
        </button>

        <div className={style.panel__card_boton}>
          <button className={style.panel__boton} onClick={(e) => openDetail(e)}>
            Gestion Mascotas{" "}
          </button>
          <button className={style.panel__boton} onClick={(e) => openRace(e)}>
            Gestion Razas{" "}
          </button>
          <button className={style.panel__boton} onClick={(e) => openPromo(e)}>
            Promociones{" "}
          </button>
        </div>
      </div>
      <div className={style.panel__gestion}>
        <div>
          {!Detail && !race && !promo ? (
            <img src="../../../../public/Tu_Mascota_Tienda-T.png" alt="" />
          ) : null}
        </div>

        <div className={style.panel__gestion_pagina}>
          {(Detail && <DetailAdmin />) ||
            (race && <Race />) ||
            (promo && <Promo />)}
        </div>

        {Detail || race || promo ? (
          <button
            className={style.panel__botonClose}
            onClick={(e) => closePanel(e)}
          >
            Cerrar Panel
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Panel;
