const {
  createDog,
  allDogController,
  dogByIdController,
  updateDogController,
  deletDogController,
} = require("../controller/dogController");

////////////////////////////////////////////

const getDogHandlers = async (req, res) => {
  try {
    const data = await allDogController();
    res.status(200).json(data);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

/////////////////////////////////////////

const getDogByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await dogByIdController(id);
    res.status(200).json(dog);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////////

const postDogHandler = async (req, res) => {
  try {
    const {
      name,
      edad,
      color,
      genero,
      imagen,
      nameRaza,
      tamanioPromedio,
      imagenRaza,
    } = req.body;

    const newDog = await createDog(
      name,
      edad,
      color,
      genero,
      imagen,
      nameRaza,
      tamanioPromedio,
      imagenRaza
    );
    res.status(201).json(newDog);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

/////////////////////////////////////////

const putDogHandler = async (req, res) => {
  try {
    const {
      id,
      name,
      edad,
      color,
      genero,
      image,
      nameRaza,
      tamanioPromedio,
      imagenRaza,
    } = req.body;
    const putdog = await updateDogController(
      id,
      name,
      edad,
      color,
      genero,
      image,
      nameRaza,
      tamanioPromedio,
      imagenRaza
    );

    res.status(200).json(putdog);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

////////////////////////////////////////

const deletDogHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const borrado = await deletDogController(id);
    res.status(200).json(borrado);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////////



module.exports = {
  getDogHandlers,
  getDogByIdHandler,
  postDogHandler,
  putDogHandler,
  deletDogHandler,
};
