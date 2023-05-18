import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { getDogByIdAction } from "../../redux/Actions/dogActions";
import { getAllRace } from "../../redux/Actions/razaAction";

const Detail = () => {
  const [position, setPosition] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { raza } = useSelector((state) => state.razaSlice);
  const dogDetail = useSelector((state) => state.dogs.dogDetail);

  const razaDetail = raza.filter((el) => el.nameRaza === dogDetail.raza)[0];

  console.log(razaDetail);

  const images = dogDetail.imagen;

  const handlerPrev = () => {
    setPosition(position === 0 ? images.length - 1 : position - 1);
  };

  const handleNext = () => {
    setPosition(position === images.length - 1 ? 0 : position + 1);
  };

  const phoneNumber = "+573027315371";
  const message = "Hola mi nombre es :  `   `, >>> !! Quiero informacion ¡¡, ";

  const WhatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  //////////////////////////////////////////////
  useEffect(() => {
    dispatch(getAllRace());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDogByIdAction(id));
  }, [dispatch]);

  const displayedImages = images?.slice(position, position + 1);

  return (
    <div className={style.container}>
      <div className={style.detail}>
        <div className={style.detail__listaImg}>
          {displayedImages?.map((dog, index) => {
            return (
              <div key={index} className={style.detail__figure_img}>
                <img
                  src={dog.image}
                  alt=""
                  className={style.detail__img}
                  key={index}
                />
              </div>
            );
          })}

          <div className={style.detail__botom}>
            <button
              onClick={(e) => handlerPrev(e)}
              className={style.detail__prev}
            >
              <img
                src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684371282/prueba/avance-rapido_xubi3p.png"
                alt=""
                className={style.detail__flecha_prev}
              />
            </button>
            <button
              onClick={(e) => handleNext(e)}
              className={style.detail__prev}
            >
              <img
                src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684371282/prueba/avance-rapido_xubi3p.png"
                alt=""
                className={style.detail__flecha_next}
              />
            </button>
          </div>
        </div>

        <div className={style.detail__texts}>
          <h1 className={style.detail__title}> {dogDetail.name} </h1>

          <li className={style.detail__detalle}>
            {dogDetail.edad} Meses de edad
          </li>

          <li className={style.detail__detalle}>
            Color disponible: {dogDetail.color}{" "}
          </li>
          <li className={style.detail__detalle}>Genero: {dogDetail.genero} </li>
          <li className={style.detail__detalle}>Raza: {dogDetail.raza} </li>
          <li className={style.detail__detalle}>
            Tamaño edad adulta: {dogDetail.tamano}{" "}
          </li>
        </div>
        <div className={style.contac}>
          <h1>Contactanos</h1>

          <div className={style.detail__redes}>
            <div>
              <Link to={WhatsAppLink} target="_blank" className={style.Link}>
                <img
                  src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358609/prueba/whatsapp-logo-24_hvnyjs.png"
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
                  src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358663/prueba/facebook-logo-24_ahx2vn.png"
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
                  src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358698/prueba/instagram-logo-24_ikmnm2.png"
                  alt=""
                  className={style.contac__img}
                />
                <h6>Instagram</h6>
              </Link>
            </div>
            <div>
              <div className={style.Link}>
                <img
                  src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358736/prueba/phone-call-solid-24_jdwbko.png"
                  alt=""
                  className={style.contac__img}
                />
                <h6>Cel 3027315371</h6>
              </div>
            </div>
            <div>
              <div className={style.Link}>
                <img
                  src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684358759/prueba/envelope-regular-24_khrsp3.png"
                  alt=""
                  className={style.contac__img}
                />
                <h6>tumascota1103@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={style.raza}>
          <h2 className={style.raza__title}>
            {razaDetail && razaDetail.nameRaza}
          </h2>
          <h3 className={style.raza__reseña}>
            {razaDetail && razaDetail.reseña}
          </h3>
          {razaDetail &&
            razaDetail.cualidades.map((el, index) => (
              <li key={index} className={style.raza__cualidad}>
                {el.cualidad}
              </li>
            ))}
          <div className={style.raza__galeria}>
            <h2 className={style.raza__title}>
              Imagenes de la raza {razaDetail && razaDetail.nameRaza}
            </h2>
            <figure className={style.raza__figure}>
              {razaDetail &&
                razaDetail.imagenRaza.map((el, index) => (
                  <img
                    src={el.image}
                    alt=""
                    key={index}
                    className={style.raza__img}
                  />
                ))}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
