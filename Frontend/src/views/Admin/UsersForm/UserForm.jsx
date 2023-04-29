import { useState } from "react";
import style from "./UserForm.module.css";
import { useDispatch, useSelector } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    userPassword: "",
  });

  

  return (
    <div className={style.container}>
      <div className={style.message}>
        <img
          src="../../../../public/signo-de-exclamacion.png"
          alt=""
          className={style.message__img}
        />
        <p>
          {" "}
          Estas ingresando en un componente restirngido, Solo usuario admin
        </p>
      </div>

      <form className={style.form}>
        <div className={style.form__inputNombre}>
          <input type="text" placeholder="Nombre" />
        </div>
        <div className={style.form__inputPassword}>
          <input type="password" placeholder="Contraseña" />
        </div>
        <button className={style.form__boton}>Entrar</button>
      </form>
    </div>
  );
};

export default UserForm;
