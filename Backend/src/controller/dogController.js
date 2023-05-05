const { dogBdd } = require("../data/generalData");
const { Dog, Race } = require("../db");

//////////////////////////////////////

const createDog = async (name, edad, color, genero, imagen) => {
  const create = await Dog.create({
    name,
    edad,
    color,
    genero,
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
  image,
  nameRaza,
  tamanioPromedio,
  imagenRaza
) => {
 
  const race = await Race.findByPk(id);
  

  await Dog.update(
    {
      name,
      edad,
      color,
      genero,
      imagen: [{ image: image }],
    },
    {
      where: {
        id: id,
      },
    }
  );

  await Race.update(
    {
      nameRaza,
      tamanioPromedio,
      imagenRaza: [{ imgRace: "sdfsdfsdfsdfsf" }],
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
