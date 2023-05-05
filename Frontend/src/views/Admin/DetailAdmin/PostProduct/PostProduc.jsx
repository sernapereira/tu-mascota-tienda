import { useState } from "react";
import style from "./PostProduc.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postDogAction } from "../../../../redux/Actions/dogActions";

let cache = {};

let uploadImage = async (file) => {
  try {
    if (cache.imag === file) {
      console.log("el url es:" + img.secure_url);
      return img.secure_url;
    }
    cache.imag = file;

    let data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "image");
    data.append("api_key", "612353432275849");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkw9ck7qv/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    let img = await res.json();

    console.log(img.secure_url);

    return img.secure_url;
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////

const PostProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    edad: "",
    color: "",
    genero: "",
    imagen: [],
  });

  const [archivo, setArchivo] = useState(null);

  //////////////////////////////////////////

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  ///////////////////////////////////////////

  const manejarCambioArchivo = async (evento) => {
    const file = evento.target.files[0];

    let imageUrl = await uploadImage(file);
    // const formData = new FormData();
    // formData.append('image', file);
    setArchivo(imageUrl);
  };

  console.log("Estado >>>> ", archivo);
  /////////////////////////////////////////

  const subirArchivo = (event) => {
    event.preventDefault();
    setForm({ ...form, imagen: [...form.imagen, archivo] });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // dispatch(postDogAction(form));
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
          {/* <input
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="Raza"
            name="raza"
          /> */}
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="color"
            name="color"
          />
        </div>
        <div>
          <figure className={style.form__figure}>
            <img src={archivo} className={style.form__img} />
          </figure>
          <input
            type="file"
            placeholder="Imagen"
            onChange={(e) => manejarCambioArchivo(e)}
          />
          <button onClick={(e) => subirArchivo(e)}>Subir imagen</button>
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
