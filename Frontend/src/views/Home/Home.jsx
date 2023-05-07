import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";
import { getAllDog } from "../../redux/Actions/dogActions";
import Cards from "../../component/Cards/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDog());
  }, []);

  const phoneNumber = "+573027315371";
  const message = "Hola mi nombre es :  `   `, >>> !! Quiero informacion ¡¡, ";

  const WhatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={style.container}>
      <div className={style.home}>
        <div className={style.nav}>
          <h1 className={style.nav__title}> ! Tu mascota te espera ¡</h1>
          <div className={style.nav__allSelect}>
            <div className={style.nav__select_enum}>
              <h3>Razas</h3>
              <select name="raza" className={style.nav__select}>
                <option value="labrador">Labrador</option>
              </select>
            </div>

            <div className={style.nav__select_enum}>
              <h3>Genero</h3>
              <select name="genero" className={style.nav__select}>
                <option value="labrador">Hembra</option>
                <option value="labrador">Macho</option>
              </select>
            </div>
            <div className={style.nav__select_enum}>
              <h3>Tamaños</h3>
              <select name="tamaño" className={style.nav__select}>
                <option value="tamaño">Grande</option>
                <option value="tamaño">Medianos</option>
                <option value="tamaño">Pequeños</option>
              </select>
            </div>
            <div className={style.nav__select_enum}>
              <h3>Color</h3>
              <select name="color" className={style.nav__select}>
                <option value="labrador">Negros</option>
                <option value="labrador">Blancos</option>
                <option value="labrador">Cremas</option>
                <option value="labrador">Gris</option>
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
          <Cards />
        </div>
        <div></div>

        <div className={style.home__contac}>
          <div>
            <img src="../../../public/Tu_Mascota_Tienda-T.png" alt="" />
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
