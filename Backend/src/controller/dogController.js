const { dogBdd } = require("../data/generalData");
const { Dog, Race } = require("../db");

const createDog = async (
  name,
  edad,
  color,
  genero,
  imagen,
  nameRaza,
  tamanioPromedio,
  imagenRaza
) => {
  const create = await Dog.create({
    name,
    edad,
    color,
    genero,
    imagen,
  });

  const createRaza = await Race.create({
    nameRaza,
    tamanioPromedio,
    imagenRaza,
  });

  create.addRace(createRaza);

  return { message: "Producto creado !!!!" };
};

const allDogController = async () => {
  const data = await dogBdd();
  console.log(data);
  return data;
};

module.exports = {
  createDog,
  allDogController,
};
