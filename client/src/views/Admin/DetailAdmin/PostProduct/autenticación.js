import { postDog } from "../../../../redux/slice/dogSlice";
import { postDogAction } from "../../../../redux/Actions/dogActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const initialForm = {
  name: "",
  edad: "",
  color: "",
  genero: "",
  raza: "",
  imagen: [],
  tamano: "",
};

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

export const useError = (post) => {
  const [errors, setErrors] = useState({});
  const [correct, setCorrect] = useState({});
  const [form, setForm] = useState(initialForm);
  const [statusco, setStatusco] = useState(false);

  const dispatch = useDispatch();

  const validateError = (form) => {
    const error = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!form.name.trim()) {
      error.name = "⚠ El nombre de la mascota es requerido";
    }
    if (!form.edad.trim()) {
      error.edad = "⚠ Edad requeridad, asiganar edad por meses";
    }
    if (!form.color.trim()) {
      error.color =
        "⚠ Campo obligatorio, asignar un color ejemplo: `negro-cafe-blanco`";
    }
    if (!form.raza.trim()) {
      error.raza = "⚠ Campo requerido, asignar raza de la mascota";
    }
    if (!form.genero.trim()) {
      error.genero = "⚠ Campo requerido, Colocar tamaño de la mascota";
    }
    if (form.imagen.length === 0) {
      error.imagen = "⚠ Campo requerido, por lo menos una imagen";
    }
    if (!form.tamano.trim()) {
      error.tamano = "⚠ Campo requerido, Colocar tamaño de la mascota";
    }

    return error;
  };

  const validateCorrecto = () => {
    const correcto = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (form.name.trim()) {
      correcto.name = "Campo completo ✔";
    }
    if (form.edad.trim()) {
      correcto.edad = "Campo completo ✔";
    }
    if (form.color.trim()) {
      correcto.color = "Campo completo ✔";
    }
    if (form.raza.trim()) {
      correcto.raza = "Campo completo ✔";
    }
    if (!form.imagen.length === 0) {
      correcto.imagen = "Campo completo ✔";
    }
    if (form.tamano.trim()) {
      correcto.tamano = "Campo completo ✔";
    }

    return correcto;
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handlerBlur = (e) => {
    changeHandler(e);
    setErrors(validateError(form));
    setCorrect(validateCorrecto(form));
  };

  const manejarCambioArchivo = async (evento) => {
    const file = evento.target.files[0];
    let image = await uploadImage(file);
    setForm({
      ...form,
      imagen: [...form.imagen, { image }],
    });
  };

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
      }, 3000);

      return () => clearTimeout(cambiarEstadoDespuesDeTiempo);
    }
  }, [statusco]);

  useEffect(() => {
    post.status === 201 ? setStatusco(true) : setStatusco(false);
  });

  return {
    form,
    errors,
    correct,
    statusco,
    handlerBlur,
    changeHandler,
    manejarCambioArchivo,
    onSubmitHandler,
  };
};
