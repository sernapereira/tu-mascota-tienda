import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ key, id, name, edad, color, genero, imagen, raza }) => {

  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`} className={style.card__link}>
        <figure className={style.card__figure}>
          <img src={ imagen[0] ? imagen[0]?.image : "../../../public/default-image-5-1.jpg"} alt="imagen de mascota" className={style.card__img} />
        </figure>
        <div className={style.card__text}>
          <h1>{name}</h1>
          <h3 className={style.card__h3}> Raza {raza}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
