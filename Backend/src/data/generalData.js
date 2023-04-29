const { Dog, Race, Users } = require("../db");

const dogBdd = async () => {
  const dogData = await Dog.findAll();
  return dogData;
};

const raceBdd = async () =>{
  return await Race.findAll()
}

const raceBddById = async (id) => {
  return await Race.findByPk(id);
}

const usersBdd = async () =>{
  return await Users.findAll()
}

const userBddById = async (id) => {
  return await Users.findByPk(id);
}



module.exports = { dogBdd, raceBdd, raceBddById, usersBdd, userBddById };
