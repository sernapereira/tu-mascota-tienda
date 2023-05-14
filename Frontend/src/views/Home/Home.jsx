import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";
import { getAllDog } from "../../redux/Actions/dogActions";
import Cards from "../../component/Cards/Cards";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import { setCurrentPage } from "../../redux/slice/pageSlice";
import { filterAllDogs } from "../../redux/Actions/filterAction";
import { getAllRace } from "../../redux/Actions/razaAction";

const Home = () => {
  const dispatch = useDispatch();
  const { filterDog, dogs } = useSelector((state) => state.dogs);

  const [filters, setFilters] = useState({
    raza: "",
    genero: "",
    tamaño: "",
  });

  useEffect(() => {
    dispatch(getAllDog());
    window.scrollTo(0, 0);
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(filterAllDogs(filters));
  }, [dispatch, filters, dogs]);
  

  const phoneNumber = "+573027315371";
  const message = "Hola mi nombre es :  `   `, >>> !! Quiero informacion ¡¡, ";

  const WhatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  function handlerFilter(event) {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    dispatch(filterAllDogs({ ...filters, [name]: value }));
    dispatch(setCurrentPage(1));
  }
  
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Navbar />
        <div className={style.nav}>
          <h1 className={style.nav__title}> ! Tu mascota te espera ¡</h1>
          <div className={style.nav__allSelect}>
            <div className={style.nav__select_enum}>
              <h3>Razas</h3>
              <select
                name="raza"
                className={style.nav__select}
                onChange={(e) => handlerFilter(e)}
              >
                <option value="">Todos</option>
                {dogs.map((el, inex) => (
                  <option value={el.raza} key={inex}>
                    {el.raza}
                  </option>
                ))}
              </select>
            </div>

            <div className={style.nav__select_enum}>
              <h3>Genero</h3>
              <select
                name="genero"
                className={style.nav__select}
                onChange={(e) => handlerFilter(e)}
              >
                <option value="">Todos</option>
                <option value="hembra">Hembra</option>
                <option value="macho">Macho</option>
              </select>
            </div>
            <div className={style.nav__select_enum}>
              <h3>Tamaños</h3>
              <select
                name="tamaño"
                className={style.nav__select}
                onChange={(e) => handlerFilter(e)}
              >
                <option value="">Todos</option>
                <option value="mini">De raza Mini</option>
                <option value="pequenias">De raza Pequeña</option>
                <option value="medianas">De raza Medianas</option>
                <option value="grande">De raza Grandes</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.home__div}>
          <div className={style.home__anuncio}>
            <h1> 🐶 ! Despreocupate ¡ </h1>
            <h3>Todas nuestras mascotas cuentan con :</h3>
            <ul>
              <li>Carnet de vacunacion ✔</li>
              <li>Desparacitacion al dia ✔</li>
              <li>Certificado de pureza ✔</li>
            </ul>
          </div>
          <div className={style.home__imagen}></div>
        </div>
        <div className={style.home__franja}>
          <h1 className={style.home__franja_title}>
            {" "}
            ! Hacemos Tus Sueños Realidad ¡
          </h1>
        </div>
        <div className={style.home__cards}>
          <Cards filterDog={filterDog} />
        </div>
        <div></div>

        <div className={style.home__contac}>
          <div>
            <img
              src="../../../public/Tu_Mascota_Tienda-T.png"
              alt=""
              className={style.home__contac_imagen}
            />
          </div>
          <div>
            <h1>Contactanos</h1>

            <div className={style.home__redes}>
              <div>
                <Link to={WhatsAppLink} target="_blank" className={style.Link}>
                  <img
                    src="../../../public/whatsapp-logo-24.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6> WhatsApp</h6>
                </Link>
              </div>
              <div>
                <Link
                  to={"https://www.facebook.com/profile.php?id=100069404112063"}
                  target="_blank"
                  className={style.Link}
                >
                  <img
                    src="../../../public/facebook-logo-24.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6>Facebook</h6>
                </Link>
              </div>

              <div>
                <Link
                  className={style.Link}
                  to={
                    "https://instagram.com/tumascota1103?igshid=ZGUzMzM3NWJiOQ=="
                  }
                  target="_blank"
                >
                  <img
                    src="../../../public/instagram-logo-24.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6>Instagram</h6>
                </Link>
              </div>
              <div>
                <div className={style.Link}>
                  <img
                    src="../../../public/phone-call-solid-24.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6>Cel 3027315371</h6>
                </div>
              </div>
              <div>
                <div className={style.Link}>
                  <img
                    src="../../../public/envelope-regular-24.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6>tumascota1103@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
