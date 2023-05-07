import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ key, id, name, edad, color, genero, imagen, raza }) => {
  console.log(imagen);
  return (
    <div className={style.card}>
      <figure className={style.card__figure}>
        <Link to={`/detail/${id}`} className={style.card__link}>
          <img src={imagen[0].image} alt="" className={style.card__img} />
        </Link>
      </figure>
      <div className={style.card__text}>
        <h1>{name}</h1>
        <h3 className={style.card__h3}>Labrador</h3>
      </div>
    </div>
  );
};

export default Card;
