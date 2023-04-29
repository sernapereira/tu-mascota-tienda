const {
  allRaceController,
  createRace,
  raceByIdController,
  updateRaceController,
  deletRaceController,
} = require("../controller/raceController");

const getRaceHandlers = async (req, res) => {
  try {
    const data = await allRaceController();
    res.status(200).json(data);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

/////////////////////////////////

const getRaceByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await raceByIdController(id);
    res.status(200).json(dog);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//////////////////////////////////////

const postRaceHandler = async (req, res) => {
  try {
    const { nameRaza, tamanioPromedio, imagenRaza } = req.body;

    const newDog = await createRace(nameRaza, tamanioPromedio, imagenRaza);
    res.status(201).json(newDog);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//////////////////////////////////////

const putRaceHandler = async (req, res) => {
  try {
    const { id, nameRaza, tamanioPromedio, imagenRaza } = req.body;

    console.log(req.body);
    const putRace = await updateRaceController(
      id,
      nameRaza,
      tamanioPromedio,
      imagenRaza
    );

    res.status(200).json(putRace);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////

const deletRaceHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const borrado = await deletRaceController(id);
    res.status(200).json(borrado);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

/////////////////////////////////////

module.exports = {
  getRaceHandlers,
  getRaceByIdHandler,
  postRaceHandler,
  putRaceHandler,
  deletRaceHandler,
};
