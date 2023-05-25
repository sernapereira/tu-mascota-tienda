import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDog } from "../../../../redux/Actions/dogActions";
import style from "./Product.module.css";

const Product = () => {
  const { dogs } = useSelector((state) => state.dogs);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDog());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <div className={style.container}>
      <div className={style.product}>
        {dogs?.map((el, index) => (
          <div key={index} className={style.product__card}>
            <figure className={style.product__figure}>
              <img
                src={el?.imagen[0].image}
                alt=""
                className={style.product__card_img}
              />
            </figure>
            <div className={style.product__text}>
            <h2> Nombre: {el.name}</h2>
            <h3>Raza: {el.raza}</h3>
            <h2>Id: {el.id}</h2>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
