import { useState } from "react";
import style from "./PostProduc.module.css";

const PostProduct = () => {
  const [form, setForm] = useState({
    name: "",
    edad: "",
    color: "",
    genero: "",
    imagen: [],
  });

  const [image, setImagen] = useState([]);

  //////////////////////////////////////////

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  ///////////////////////////////////////////

  const imagenHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    setImagen([...image, value]);
  };
  console.log(image);
  return (
    <div className={style.container}>
      <div>
        <div>
          <h2>Publicar Nuevo Producto</h2>
        </div>
      </div>
      <form className={style.form}>
        <div className={style.form__input}>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="Nombre mascota"
            name="name"
          />
          <input
            onChange={(e) => changeHandler(e)}
            type="number"
            placeholder="Meses de vida"
            name="edad"
          />
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="Genero"
            name="genero"
          />
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="Raza"
            name="rasa"
          />
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="color"
            name="color"
          />
        </div>
        <div>
          <figure className={style.form__figure}>
            {
              <img
                onChange={(e) => imagenHandler(e)}
                src="../../../../../public/default-image-5-1.jpg"
                className={style.form__img}
              />
            }
          </figure>
          <input type="file" placeholder="Imagen" />
        </div>
      </form>
      <div>
        <button className={style.form__boton}>Subir Producuto</button>
      </div>
    </div>
  );
};

export default PostProduct;
