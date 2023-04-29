import { useState } from "react";
import style from "./Admin.module.css";
import Form from "./Form/Form";
import Product from "./Product/Product";
import UserForm from "./UsersForm/UserForm";

const Admin = () => {
  const [estado, setEstado] = useState(false);

  return (
    <div className={style.container}>
      {!estado && <UserForm />}
      <div className={style.admin}>
        {estado && <Form />}
        {estado && <Product />}
      </div>
    </div>
  );
};

export default Admin;
