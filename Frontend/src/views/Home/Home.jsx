import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../component/navbar/navbar";
import style from "./Home.module.css";
import { getAllDog } from "../../redux/Actions/dogActions";



const Home = () => {
  
  const dispatch = useDispatch()
  const allDog = useSelector((state) => state.dog) 

  useEffect(()=>{
    dispatch(getAllDog()) 
  },[])

  return (
    <div className={style.container}>
      <Navbar />

      <div></div>
    </div>
  );
};

export default Home;
