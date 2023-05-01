import { useEffect, useState } from "react";
import style from "./InicioForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  autenticacion2,
  postAutenticacionAdmin,
} from "../../../redux/Actions/adminAction";
import Form from "../Form/Form";
import Product from "../Product/Product";

const InicioForm = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.admin);
  const { autenticacion } = useSelector((state) => state.admin);

  const [form, setForm] = useState({
    username: "",
    userPassword: "",
  });
  const [nombre, setNombre] = useState(false);

  //////////////////////////////////////////

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  /////////////////////////////////////////

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postAutenticacionAdmin(form));
  };

  const cerrarHandler = (event) => {
    window.location.reload(event);
    dispatch(autenticacion2(false));
    localStorage.removeItem("admin");
  };

  console.log("admin >>>, ", admin);
  console.log("auto >>>> ", autenticacion);

  ////////////////////////////////////////

  admin === true ? localStorage.setItem("admin", true) : null;

  ////////////////////////////////////////

  const acceso =
    localStorage.getItem("admin") === null ||
    localStorage.getItem("admin") === "false"
      ? false
      : true;

  ///////////////////////////////////////
  //localStorage.removeItem("admin")
  useEffect(() => {
    setNombre(admin.codigo === 400 ? true : false);
    dispatch(autenticacion2(acceso));
  });

  return (
    <div>
      {!autenticacion ? (
        <div className={style.container}>
          <div className={style.message}>
            <img
              src="../../../../public/signo-de-exclamacion.png"
              alt=""
              className={style.message__img}
            />
            <p>
              Estas ingresando en un componente restirngido, Solo usuario admin
            </p>
            {nombre && <p>Nombre incorrecto</p>}
            {!admin && <p>Comtraseña incorrecta</p>}
          </div>

          <form className={style.form}>
            <div className={style.form__inputNombre}>
              <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => changeHandler(e)}
                value={form.username}
                name="username"
              />
            </div>
            <div className={style.form__inputPassword}>
              <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => changeHandler(e)}
                value={form.userPassword}
                name="userPassword"
              />
            </div>

            <button
              className={style.form__boton}
              onClick={(e) => submitHandler(e)}
            >
              Verificar
            </button>
          </form>
        </div>
      ) : null}

      {autenticacion ? <Form /> : null}
      {autenticacion ? <Product /> : null}
      {autenticacion ? (
        <form>
          <button
            className={style.form__boton}
            onClick={(e) => cerrarHandler(e)}
            name="cerrar"
            value={false}
          >
            Cerrar
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default InicioForm;
