const { inicioSeccionController } = require("../controller/adminController");

///////////////////////////////////////////

const inicioSeccionHandler = async (req, res) => {
  try {
    const { username, userPassword } = req.body;
    const result = await inicioSeccionController(username, userPassword);
    res.status(200).json(result);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};


//////////////////////////////////////////////////



module.exports = {
    inicioSeccionHandler,

}


