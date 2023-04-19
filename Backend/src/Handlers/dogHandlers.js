const { createDog, allDogController } = require("../controller/dogController");

const getDogHandlers = async (req, res) => {
  try {
    const data = await allDogController();
    res.status(200).json(data);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

const getDogByIdHandler = (req, res) => {
  res.end("by id");
};

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
  
const putDogHandler = (req, res) => {
  res.end("actualizar put");
};

const deletDogHandler = (req, res) => {
  res.end("borrar delet");
};

module.exports = {
  getDogHandlers,
  getDogByIdHandler,
  postDogHandler,
  putDogHandler,
  deletDogHandler,
};
