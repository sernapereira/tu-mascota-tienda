import { useState } from "react";
import style from "./PostProduc.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postDogAction } from "../../../../redux/Actions/dogActions";

let cache = {};

let uploadImage = async (file) => {
  try {
    if (cache.imag === file) {
      return img.secure_url;
    }
    cache.imag = file;

    let data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "folderNuevo");
    data.append("api_key", "477634988216349");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dwuywmhrq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    let img = await res.json();

    return img.secure_url;
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////

const initialForm = {
  name: "",
  edad: "",
  color: "",
  genero: "",
  raza: "",
  imagen: [],
};

const PostProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

  //////////////////////////////////////////

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  ///////////////////////////////////////////

  const manejarCambioArchivo = async (evento) => {
    const file = evento.target.files[0];
    let image = await uploadImage(file);
    setForm({
      ...form,
      imagen: [...form.imagen, { image }],
    });
  };

  /////////////////////////////////////////

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(postDogAction(form));
    setForm({
      name: "",
      edad: "",
      color: "",
      genero: "",
      raza: "",
      imagen: [],
    });
  };

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
            name="raza"
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
            {form.imagen
              ? form.imagen.map((el, index) => (
                  <img src={el.image} className={style.form__img} key={index} />
                ))
              : null}
          </figure>
          <input
            type="file"
            placeholder="Imagen"
            onChange={(e) => manejarCambioArchivo(e)}
          />
          {/* <button onClick={(e) => subirArchivo(e)}>Subir imagen</button> */}
        </div>
      </form>
      <div>
        <button
          onClick={(e) => onSubmitHandler(e)}
          className={style.form__boton}
        >
          Subir Producuto
        </button>
      </div>
    </div>
  );
};

export default PostProduct;
