import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDog } from "../../../../redux/Actions/dogActions";
import style from "./Product.module.css";

const Product = () => {
  const { dogs } = useSelector((state) => state.dogs);
  console.log(dogs?.map((el, index) => el.imagen[0]));

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
            <h3> Nombre: {el.name}</h3>
            <h3>Raza: {el.raza}</h3>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
