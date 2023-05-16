import { useState } from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import style from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";

const Cards = ({ filterDog }) => {

  return (
    <div className={style.container}>
      <Paginado cards={filterDog} />
    </div>
  );
};

export default Cards;
