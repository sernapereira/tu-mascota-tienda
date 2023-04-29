const { usersBdd, userBddById } = require("../data/generalData");
const { Users } = require("../db");
const { hashPassword, comparePassword } = require("./encristado");

const createUser = async (name, password, admin) => {
  const hashedPassword = await hashPassword(password);
  console.log(hashedPassword);
  await Users.create({
    name,
    password: hashedPassword,
    admin,
  });

  return { message: "Producto Creado Con Extio 🐶" };
};

/////////////////////////////////////////////

const allUsersController = async () => {
  const data = await usersBdd();
  return data;
};

////////////////////////////////////////////

const userByIdController = async (id) => {
  let data = await userBddById(id);

  if (data) {
    return data;
  } else {
    throw Error("Prenda no encontrada");
  }
};

/////////////////////////////////////////

const updateUserController = async (id, name, password, admin) => {
  await Users.update(
    {
      id,
      name,
      password,
      admin,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return await userByIdController(id);
};

//////////////////////////////////////////////

const deletUserController = async (id) => {
  const borrado = await userByIdController(id);

  await Users.destroy({
    where: {
      id: id,
    },
    force: true,
  });

  return ["Usuarios Borrada", borrado];
};

/////////////////////////////////////

const inicioSeccion = async (username, userPassword) => {
  const userClient = await Users.findOne({ username });

  if (!userClient) {
    return new Error({ error: "usuarios no encontrado" }, { codigo: 400 });
  }

  const isMatch = await comparePassword(userPassword, userClient.password);

  if (isMatch) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  createUser,
  allUsersController,
  userByIdController,
  updateUserController,
  deletUserController,
  inicioSeccion,
};
