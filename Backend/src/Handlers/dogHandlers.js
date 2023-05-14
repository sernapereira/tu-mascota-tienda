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
      raza,
      imagen,
      tamano,
    
    } = req.body;

    console.log(imagen);

    const newDog = await createDog(
      name,
      edad,
      color,
      genero,
      raza,
      imagen,
      tamano
    
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
    
    } = req.body;
    const putdog = await updateDogController(
      id,
      name,
      edad,
      color,
      genero,
      image,
    
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
