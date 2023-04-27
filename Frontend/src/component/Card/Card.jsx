import { Link } from "react-router-dom";
import style from "./Card.module.css";


const Card = ({ key, id, name, edad, color, genero, imagen, raza }) => {
  return (
    <div className={style.card}>
      <figure className={style.card__figure}>
        <Link to={`/detail/${id}`}>
          <img src={imagen[0][0].image} alt="" />
        </Link>
      </figure>
    </div>
  );
};

export default Card;
