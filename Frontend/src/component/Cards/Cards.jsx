import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";

const Cards = () => {
  const { dogs } = useSelector((state) => state.dogs);

  return (
    <div className={style.container}>
      {dogs?.map((dog, index) => {

        return (
          <Card
            key={index}
            id={dog.id}
            name={dog.name}
            edad={dog.edad}
            color={dog.color}
            genero={dog.genero}
            imagen={[dog.imagen]}
            raza={[dog.rece]}
          />
        );
      })}
    </div>
  );
};

export default Cards;

