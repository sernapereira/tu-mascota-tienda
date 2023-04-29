import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";
import { getAllDog } from "../../redux/Actions/dogActions";
import Cards from "../../component/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDog());
  }, []);

  return (
    <div className={style.container}>
      <Cards />
    </div>
  );
};

export default Home;
