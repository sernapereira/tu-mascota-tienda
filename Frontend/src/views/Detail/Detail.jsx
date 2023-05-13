import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { getDogByIdAction } from "../../redux/Actions/dogActions";
import Navbar from "../../component/navbar/navbar";

const Detail = () => {
  const [position, setPosition] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();

  const dogDetail = useSelector((state) => state.dogs.dogDetail);

  const images = dogDetail.imagen;
  console.log(images);

  const handlerPrev = () => {
    setPosition(position === 0 ? images.length - 1 : position - 1);
  };

  const handleNext = () => {
    setPosition(position === images.length - 1 ? 0 : position + 1);
  };

  //////////////////////////////////////////////
  useEffect(() => {
    dispatch(getDogByIdAction(id));
  }, []);

  const displayedImages = images?.slice(position, position + 1);

  return (
    <div className={style.container}>
     <Navbar/>
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
                src="../../../public/avance-rapido.png"
                alt=""
                className={style.detail__flecha_prev}
              />
            </button>
            <button
              onClick={(e) => handleNext(e)}
              className={style.detail__prev}
            >
              <img
                src="../../../public/avance-rapido.png"
                alt=""
                className={style.detail__flecha_next}
              />
            </button>
          </div>
        </div>

        <div className={style.detail__texts}>
          <h2>Hola Soy {dogDetail.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
