import { useBajar } from "./HooskBajar";
import style from "./Gestion.module.css";

const Gestion = () => {
  const { form, exito, product, changeHandler, handlerGet, handlerDelete } =
    useBajar();

  return (
    <div className={style.container}>
      {exito ? (
        <div className={style.exito}>
          {" "}
          <h2>Producto borrado con exito</h2>
        </div>
      ) : null}
      {product?.name && !exito ? (
        <div className={style.confirmar}>
          <h3 className={style.confirmar__title}>Confirmar eliminacion del producto, No se volvera a recuperar</h3>
          <button
            className={style.confirmar__boton}
            onClick={(e) => handlerDelete(e)}
          >
            Eliminar
          </button>
        </div>
      ) : (
        <div className={style.bajar}>
          {" "}
          <h1 className={style.bajar__title}>Bajar Producto</h1>
          <form>
            <div>
              <h3 className={style.bajar__title2}>Ingresar ID del Producto</h3>
              <input
                type="number"
                placeholder="ID"
                name="id"
                onChange={(e) => changeHandler(e)}
                className={style.bajar__input}
              />
            </div>
            {product?.codigo === 400 ? (
              <h2 className={style.bajar__noEncontrado}>⚠{product?.error}</h2>
            ) : null}
            <button
              className={style.bajar__boton}
              onClick={(e) => handlerGet(e)}
              disabled={form.id === ""}
            >
              Borrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Gestion;
