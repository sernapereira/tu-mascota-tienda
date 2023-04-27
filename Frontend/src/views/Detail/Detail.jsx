import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { getDogByIdAction } from "../../redux/Actions/dogActions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogByIdAction(id));
  }, []);

  const dogDetail = useSelector((state) => state.dogs.dogDetail);
  console.log(dogDetail?.imagen);

  return (
    <div className={style.detail}>
      <figure className={style.detail__figure}>
        {dogDetail.imagen?.map((dog, index) => {
          return <img src={dog.image} alt="" className={style.detail__img} />;
        })}
      </figure>

    </div>
  );
};

export default Detail;
