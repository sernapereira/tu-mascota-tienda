import { useEffect, useRef, useState } from "react";
import style from "./PostProduc.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postDogAction } from "../../../../redux/Actions/dogActions";
import { postDog } from "../../../../redux/slice/dogSlice";

let cache = {};

let uploadImage = async (file) => {
  try {
    if (cache.imag === file) {
      return img.secure_url;
    }
    cache.imag = file;

    let data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "prueba");
    data.append("api_key", "612353432275849");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkw9ck7qv/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    let img = await res.json();
      console.log(img);
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
  tamano: "",
};

const PostProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [statusco, setStatusco] = useState(false);

  const { post } = useSelector((state) => state.dogs);
  console.log(post.status);

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
    setForm(initialForm);
  };

  useEffect(() => {
    if (statusco) {
      const cambiarEstadoDespuesDeTiempo = setTimeout(() => {
        setStatusco(false);
        dispatch(postDog({ status: 400 }));
        
      }, 5000);

      return () => clearTimeout(cambiarEstadoDespuesDeTiempo);
    }
  }, [statusco]);

  useEffect(() => {
    post.status === 201 ? setStatusco(true) : setStatusco(false);
  });

  console.log(statusco);
  return (
    <div className={style.container}>
      {!statusco ? (
        <div>
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

              <select name="genero" onChange={(e) => changeHandler(e)}>
                <option value="">genero</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                <option value="macho y hembra">Macho y Hembra</option>
              </select>

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

              <select name="tamano" onChange={(e) => changeHandler(e)}>
                <option value="">Tamaño</option>
                <option value="mini">Mini</option>
                <option value="pequenias">Pequeños</option>
                <option value="medianas">Medianas</option>
                <option value="grande">Grandes</option>
              </select>

              <input
                type="file"
                placeholder="Imagen"
                onChange={(e) => manejarCambioArchivo(e)}
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
      ) : (
        <div className={style.creado}>
          <h1> !! Producto creado con exito ✔</h1>
        </div>
      )}
    </div>
  );
};

export default PostProduct;
