import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <a href="/" className={style.nav__logo}>
          <div className={style.nav__logo}>
            {" "}
            <img
              src="http://res.cloudinary.com/dkw9ck7qv/image/upload/v1684336269/prueba/logoTt_wwvrof.png"
              alt="icono de compañia"
              className={style.nav__img}
            />
            <div className={style.nav__texts}>
              <h1 className={style.nav__title}>Tu Mascota Tienda</h1>
              <h5 className={style.nav__copy}>MASCOTAS Y ACCESORIOS</h5>
            </div>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
