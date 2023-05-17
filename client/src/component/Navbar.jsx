
import style from "./Navbar.module.css";

const Navbar = () => {



  return (
   
   <div className={style.container}>
      <nav className={ style.nav } >
      
       
    
        <a href="/home" className={style.nav__logo}>
          <div className={style.nav__logo}>
            {" "}
            <img
              src="../../public/logoTt.png"
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
