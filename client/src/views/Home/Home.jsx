import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";
import { getAllDog } from "../../redux/Actions/dogActions";
import Cards from "../../component/Cards/Cards";
import { Link } from "react-router-dom";

import { setCurrentPage } from "../../redux/slice/pageSlice";
import { filterAllDogs } from "../../redux/Actions/filterAction";
import { getAllRace } from "../../redux/Actions/razaAction";

const Home = () => {
  const dispatch = useDispatch();
  const { filterDog, dogs } = useSelector((state) => state.dogs);

  const [filters, setFilters] = useState({
    raza: "",
    genero: "",
    tamano: "",
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
        <div className={style.nav}>
          <p className={style.nav__title}> ! Tu mascota te espera ¡</p>
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
                <option value="macho y hembra">Macho y Hembra</option>
              </select>
            </div>
            <div className={style.nav__select_enum}>
              <h3>Tamaños</h3>
              <select
                name="tamano"
                className={style.nav__select}
                onChange={(e) => handlerFilter(e)}
              >
                <option value="">Todos</option>
                <option value="mini">Raza Mini</option>
                <option value="pequenias">Raza Pequeña</option>
                <option value="medianas">Raza Medianas</option>
                <option value="grande">Raza Grandes</option>
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
          <div className={style.home__imagen}>
            <img
              src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684353920/prueba/div_imagen_tv1q0t.png"
              alt=""
              className={style.home__imagen_img}
            />
          </div>
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

        <div className={style.home__contac}>
          <Link 
          // to={"http://localhost:5173/admin"} 
          to={"https://tu-mascota-tienda-git-main-serna7a-gmailcom.vercel.app/admin"}
          target="_blank"
          
          >
            <div>
              <img
                src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684753416/prueba/herramientas_znrbvd.png"
                alt=""
              />
            </div>
          </Link>

          <div>
            <img
              src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358556/prueba/Tu_Mascota_Tienda-T_te78vl.png"
              alt=""
              className={style.home__contac_imagen}
            />
          </div>

          <div>
            <h1 className={style.home__contac_title}>Contactanos</h1>

            <div className={style.home__redes}>
              <div>
                <Link to={WhatsAppLink} target="_blank" className={style.Link}>
                  <img
                    src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358609/prueba/whatsapp-logo-24_hvnyjs.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6 className={style.home__contac_copy}> WhatsApp</h6>
                </Link>
              </div>
              <div>
                <Link
                  to={"https://www.facebook.com/profile.php?id=100069404112063"}
                  target="_blank"
                  className={style.Link}
                >
                  <img
                    src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358663/prueba/facebook-logo-24_ahx2vn.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6 className={style.home__contac_copy}>Facebook</h6>
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
                    src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358698/prueba/instagram-logo-24_ikmnm2.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6 className={style.home__contac_copy}>Instagram</h6>
                </Link>
              </div>
              <div>
                <div className={style.Link}>
                  <img
                    src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358736/prueba/phone-call-solid-24_jdwbko.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6 className={style.home__contac_copy}>Cel 3027315371</h6>
                </div>
              </div>
              <div>
                <div className={style.Link}>
                  <img
                    src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358759/prueba/envelope-regular-24_khrsp3.png"
                    alt=""
                    className={style.contac__img}
                  />
                  <h6 className={style.home__contac_copy}>
                    tumascota1103@gmail.com
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to={WhatsAppLink} target="_blank" className={style.contacto}>
          <h3 className={style.contacto__title}>
            !Manejamos precios unicos¡ Escribenos
          </h3>
          <img
            src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358609/prueba/whatsapp-logo-24_hvnyjs.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
