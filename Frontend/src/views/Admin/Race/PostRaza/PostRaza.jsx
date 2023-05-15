import { useEffect, useState } from "react";
import style from "./PostRaza.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postRazaAction } from "../../../../redux/Actions/razaAction";
import { postRazaCreate } from "../../../../redux/slice/razaSlice";

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

    return img.secure_url;
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////

const initialForm = {
  nameRaza: "",
  tamanioPromedio: "",
  imagenRaza: [],
  reseña: "",
  cualidades: [],
};

const PostRaza = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [punto, setPunto] = useState("");
  const [estado, setStado] = useState(false);

  const { postRaza } = useSelector((state) => state.razaSlice);
  console.log(postRaza);

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
      imagenRaza: [...form.imagenRaza, { image }],
    });
  };

  /////////////////////////////////////////

  const subirPositivo = (evento) => {
    evento.preventDefault();
    setForm({
      ...form,
      cualidades: [...form.cualidades, punto],
    });
    setPunto("");
  };

  const handlerPunto = (evento) => {
    const value = evento.target.value;
    setPunto({ cualidad: value });
  };
  ////////////////////////////////////////

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(postRazaAction(form));
    setForm(initialForm);
  };

  useEffect(() => {
    if (estado) {
      const cambiarEstadoDespuesDeTiempo = setTimeout(() => {
        setStado(false);
        dispatch(postRazaCreate({ status: 400 }));
      }, 5000);

      return () => clearTimeout(cambiarEstadoDespuesDeTiempo);
    }
  }, [estado]);

  useEffect(() => {
    postRaza.status === 201 ? setStado(true) : setStado(false);
  });

  console.log(estado);

  return (
    <div className={style.container}>
      {!estado ? (
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
                placeholder="Nombre Raza"
                name="nameRaza"
              />
              <select name="tamanioPromedio" onChange={(e) => changeHandler(e)}>
                <option value="mini">Mini</option>
                <option value="pequenias">Pequeñas</option>
                <option value="medianas">Medianas</option>
                <option value="grande">grande</option>
              </select>
              <textarea
                onChange={(e) => changeHandler(e)}
                type="text"
                placeholder="Reseña"
                name="reseña"
              />
              {form.cualidades &&
                form.cualidades.map((el, index) => (
                  <li key={index}>{el.cualidad}</li>
                ))}
              <input
                type="text"
                placeholder="Puntos positivos"
                name="cualidades"
                value={punto.cualidad || ""}
                onChange={(e) => handlerPunto(e)}
              />
              <button onClick={(e) => subirPositivo(e)}>
                Subir Comentario
              </button>
            </div>

            <div>
              <figure className={style.form__figure}>
                {form.imagenRaza
                  ? form.imagenRaza.map((el, index) => (
                      <img
                        src={el.image}
                        className={style.form__img}
                        key={index}
                      />
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
      ) : <div>
        <h1>Creado con exito</h1>
      </div>
      
      }
    </div>
  );
};

export default PostRaza;
