import { useEffect, useRef, useState } from "react";
import style from "./PostProduc.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useError } from "./autenticación";

//////////////////////////////////////////

const PostProduct = () => {
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.dogs);

  const {
    form,
    errors,
    correct,
    statusco,
    handlerBlur,
    changeHandler,
    manejarCambioArchivo,
    onSubmitHandler,
  } = useError(post);

  //////////////////////////////////////////
  console.log(errors);
  return (
    <div className={style.container}>
      {!statusco ? (
        <div className={style.panel}>
          <div>
            <div>
              <h2>Publicar Nuevo Producto</h2>
            </div>
          </div>
          <form className={style.form}>
            <input
              onChange={(e) => changeHandler(e)}
              type="text"
              placeholder="Nombre mascota"
              name="name"
              className={style.form__input}
              onBlur={(e) => handlerBlur(e)}
            />
            {errors.name && (
              <h3 className={style.form__error}> {errors.name}</h3>
            )}
            {correct.name && (
              <h3 className={style.form__corect}>{correct.name}</h3>
            )}
            <input
              onChange={(e) => changeHandler(e)}
              type="number"
              placeholder="Meses de vida"
              name="edad"
              className={style.form__input}
              onBlur={(e) => handlerBlur(e)}
            />
            {errors.edad && (
              <h3 className={style.form__error}> {errors.edad}</h3>
            )}
            {correct.edad && (
              <h3 className={style.form__corect}>{correct.edad}</h3>
            )}

            <input
              onChange={(e) => changeHandler(e)}
              type="text"
              placeholder="Raza"
              name="raza"
              className={style.form__input}
              onBlur={(e) => handlerBlur(e)}
            />
            {errors.raza && (
              <h3 className={style.form__error}> {errors.raza}</h3>
            )}
            {correct.raza && (
              <h3 className={style.form__corect}>{correct.raza}</h3>
            )}
            <input
              onChange={(e) => changeHandler(e)}
              type="text"
              placeholder="color"
              name="color"
              className={style.form__input}
              onBlur={(e) => handlerBlur(e)}
            />
            {errors.color && (
              <h3 className={style.form__error}> {errors.color}</h3>
            )}
            {correct.color && (
              <h3 className={style.form__corect}>{correct.color}</h3>
            )}

            <div className={style.form__selectContainer}>
              <div className={style.form__selectAll}>
                <select
                  name="genero"
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                  className={style.form__select}
                >
                  <option value="">genero</option>
                  <option value="macho">Macho</option>
                  <option value="hembra">Hembra</option>
                  <option value="macho y hembra">Macho y Hembra</option>
                </select>
                <div className={style.form__seelcionado}>
                  <h2>{form.genero}</h2>
                </div>
              </div>

              <div className={style.form__selectAll}>
                <select
                  name="tamano"
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                  className={style.form__select}
                >
                  <option value="">Tamaño</option>
                  <option value="mini">Mini</option>
                  <option value="pequenias">Pequeños</option>
                  <option value="medianas">Medianas</option>
                  <option value="grande">Grandes</option>
                </select>
                <div className={style.form__seelcionado}>
                  <h2>{form.tamano}</h2>
                </div>
              </div>
            </div>

            <input
              type="file"
              placeholder="Imagen"
              onChange={(e) => manejarCambioArchivo(e)}
              className={style.form__file}
              onBlur={(e) => handlerBlur(e)}
            />

            <figure className={style.form__figure}>
              {form.imagen
                ? form.imagen.map((el, index) => (
                    <img
                      src={el.image}
                      className={style.form__img}
                      key={index}
                    />
                  ))
                : null}
            </figure>
          </form>
          <div>
            <button
              onClick={(e) => onSubmitHandler(e)}
              className={style.form__boton}
              disabled={
                form.name === "" ||
                form.edad === "" ||
                form.color === "" ||
                form.raza === "" ||
                form.imagen.length === 0 ||
                form.tamano === ""
              }
            >
              Subir Producuto
            </button>
          </div>
        </div>
      ) : (
        <div className={style.creado}>
          <h1> !! Producto creado con exito ✔</h1>
        </div>
      )}
    </div>
  );
};

export default PostProduct;
