const {
  allUsersController,
  userByIdController,
  createUser,
  updateUserController,
  deletUserController,
} = require("../controller/adminController");

const getUserHandlers = async (req, res) => {
  try {
    const users = await allUsersController();
    res.status(200).json(users);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//////////////////////////////////////////////

const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userByIdController(id);
    res.status(200).json(user);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

////////////////////////////////////////////////////

const postUserHandler = async (req, res) => {
  try {
    const { name, password, admin } = req.body;

    const newUser = await createUser(name, password, admin);
    res.status(201).json(newUser);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//////////////////////////////////////////////////////////

const putUserHandler = async (req, res) => {
  try {
    const { id, name, password, admin } = req.body;

    console.log(req.body);
    const putUser = await updateUserController(id, name, password, admin);

    res.status(200).json(putUser);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

//////////////////////////////////////////

const deletUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const borrado = await deletUserController(id);
    res.status(200).json(borrado);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

////////////////////////////////////////////

module.exports = {
  getUserHandlers,
  getUserByIdHandler,
  postUserHandler,
  putUserHandler,
  deletUserHandler
};
