const { dogBdd } = require("../data/generalData");
const { Dog, Race } = require("../db");

//////////////////////////////////////

const createDog = async (
  name,
  edad,
  color,
  genero,
  razaMod,
  imagen,
  tamano
) => {
  const create = await Dog.create({
    name,
    edad,
    color,
    genero,
    raza: razaMod,
    imagen,
    tamano,
  });

  return { message: "Producto Creado Con Extio 🐶", status: 201 };
};

//////////////////////////////////////////////

const allDogController = async () => {
  const data = await dogBdd();
  return data;
};

/////////////////////////////////////////////

const dogByIdController = async (id) => {
  let data = await dogBdd();
  data = data.find((el) => el.id == id);

  if (!data) {
    return { error: "producto no encontrado", codigo: 400 };
  } else {
    return data;
  }
};

/////////////////////////////////////////////

const updateDogController = async (
  id,
  name,
  edad,
  color,
  genero,
  raza,
  image
) => {
  await Dog.update(
    {
      name,
      edad,
      color,
      genero,
      raza,
      imagen: [{ image: image }],
    },
    {
      where: {
        id: id,
      },
    }
  );

  const dog = await dogByIdController(id);
  return dog;
};

////////////////////////////////////////////////

const deletDogController = async (id) => {
  const borrado = await dogByIdController(id);

  await Dog.destroy({
    where: {
      id: id,
    },
    force: true,
  });

  await Race.destroy({
    where: {
      id: id,
    },
    force: true,
  });

  return { message: "Producto borrado", codigo: 200, borrado };
};
module.exports = {
  createDog,
  allDogController,
  dogByIdController,
  updateDogController,
  deletDogController,
};
