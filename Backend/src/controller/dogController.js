const { dogBdd } = require("../data/generalData");
const { Dog, Race } = require("../db");

//////////////////////////////////////

const createDog = async (name, edad, color, genero, raza, imagen) => {
  console.log(name);
  const create = await Dog.create({
    name,
    edad,
    color,
    genero,
    raza,
    imagen,
  });

  return { message: "Producto Creado Con Extio 🐶" };
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

  if (data) {
    return data;
  } else {
    throw Error("Prenda no encontrada");
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

  return ["Producto Borrado", borrado];
};
module.exports = {
  createDog,
  allDogController,
  dogByIdController,
  updateDogController,
  deletDogController,
};
