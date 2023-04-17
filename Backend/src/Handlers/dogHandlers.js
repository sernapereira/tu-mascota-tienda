const getDogHandlers = (req, res) => {
  res.end("todos los dog");
};

const getDogByIdHandler = (req, res) => {
  res.end("by id");
};

const postDogHandler = (req, res) => {
  res.end("crear post");
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
