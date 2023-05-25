import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletDogAcrion,
  getDogByIdAction,
} from "../../../../redux/Actions/dogActions";
import { deleDogSlice, getDogById } from "../../../../redux/slice/dogSlice";

const initialForm = {
  id: "",
};

export const useBajar = () => {
  const [exito, setExito] = useState(false);
  const [product, setProduct] = useState(null);
  const [form, setForm] = useState(initialForm);
  const { dogDetail, deletDog } = useSelector((state) => state.dogs);

  ////////////////////////////////////////////

  const dispatch = useDispatch();

  ///////////////////////////////////////////

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handlerGet = (e) => {
    e.preventDefault();
    dispatch(getDogByIdAction(form.id));
  };

  const handlerDelete = (event) => {
    event.preventDefault();
    dispatch(deletDogAcrion(form.id));
  };

  //////////////////////////////////////////

  useEffect(() => {
    if (dogDetail !== null) {
      setProduct(dogDetail);
    }
  }, [dogDetail]);

  useEffect(() => {
    if ((deletDog !== null) & (deletDog.codigo === 200)) {
      setExito(true);
      const cambiarEstadoDespuesDeTiempo = setTimeout(() => {
        dispatch(deleDogSlice({ codigo: 100 }));
        dispatch(getDogById(null));
        setProduct(null);
        setExito(false);
      }, 3000);

      return () => clearTimeout(cambiarEstadoDespuesDeTiempo);
    }
  }, [deletDog, exito]);

  ///////////////////////////////////////////

  return {
    form,
    exito,
    product,
    dogDetail,
    changeHandler,
    handlerGet,
    handlerDelete,
  };
};
