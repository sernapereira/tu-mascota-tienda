const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10; // define el número de rondas de sal que bcrypt utilizará para crear el hash
  const salt = await bcrypt.genSalt(saltRounds); // crea una sal aleatoria para el hash
  const hash = await bcrypt.hash(password, salt); // crea el hash utilizando la contraseña y la sal generada
  return hash; // devuelve el hash generado
};

//=========================== Desifrar password =======================

const comparePassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash); // compara la contraseña en texto plano con el hash
  return isMatch; // devuelve true si la contraseña coincide con el hash, false en caso contrario
};

module.exports = {
  hashPassword,
  comparePassword,
};
