import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={ window.location.pathname === "/home" ? style.nav : style.nav2 } >
        {window.location.pathname === "/" ? (
          <a href="/home" className={style.nav__botton}>
            !! Encuentra tu mascota
          </a>
        ) : (
          <a href="/" className={style.nav__botton}>
            !! Mira las Ofertas que tenemos para ti
          </a>
        )}
        <a href="/home" className={style.nav__logo}>
          <div className={style.nav__logo}>
            {" "}
            <img
              src="../../../public/logoTt.png"
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
