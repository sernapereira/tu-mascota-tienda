import Product from "./Product/Product";
import style from "./DetailAdmin.module.css";
import { useState } from "react";
import PostProduct from "./PostProduct/PostProduc";
import Gestion from "./Gestion/Gestion";

const DetailAdmin = () => {
  const [product, setProduct] = useState(true);
  const [post, setPost] = useState(false);
  const [gestion, setGestion] = useState(false);

  ////////////////////////////////////

  const openComponen = (event) => {
    const value = event.target.value;

    switch (value) {
      case "Product":
        return setProduct(true), setPost(false), setGestion(false);
      case "Post":
        return setPost(true), setProduct(false), setGestion(false);
      case "Gestion":
        return setGestion(true), setPost(false), setProduct(false);

      default:
        break;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <h2>Producto</h2>
        <div className={style.card__boton}>
          <button onClick={(e) => openComponen(e)} value="Product">
            Productos
          </button>
          <button onClick={(e) => openComponen(e)} value="Post">
            Crear
          </button>
          <button onClick={(e) => openComponen(e)} value="Gestion">
            Gestion
          </button>
        </div>
      </div>
      <div className={style.gestion}>
        {(product && <Product />) ||
          (post && <PostProduct />) ||
          (gestion && <Gestion />)}
      </div>
    </div>
  );
};

export default DetailAdmin;
