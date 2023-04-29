const { raceBdd, raceBddById } = require("../data/generalData");
const { Dog, Race } = require("../db");

//////////////////////////////////////

const createRace = async (nameRaza, tamanioPromedio, imagenRaza) => {
  const create = await Race.create({
    nameRaza,
    tamanioPromedio,
    imagenRaza,
  });

  return { message: "Raza Creado Con Extio 🐶" };
};

//////////////////////////////////////////////

const allRaceController = async () => {
  const data = await raceBdd();
  return data;
};

/////////////////////////////////////////////

const raceByIdController = async (id) => {
  let data = await raceBddById(id);

  if (data) {
    return data;
  } else {
    throw Error("Raza no encontrada");
  }
};

/////////////////////////////////////////////

const updateRaceController = async (
  id,
  nameRaza,
  tamanioPromedio,
  imagenRaza
) => {
  await Race.update(
    {
      nameRaza,
      tamanioPromedio,
      imagenRaza,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return await raceByIdController(id);
};

////////////////////////////////////////////////

const deletRaceController = async (id) => {
  const borrado = await raceByIdController(id);


  await Race.destroy({
    where: {
      id: id,
    },
    force: true,
  });

  return ["Raza Borrada", borrado];
};
module.exports = {
  createRace,
  allRaceController,
  raceByIdController,
  updateRaceController,
  deletRaceController
};
