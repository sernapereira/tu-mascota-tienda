const { Dog, Race } = require("../db");

const dogBdd = async () => {
  const dogData = await Dog.findAll({
    include: [
      {
        model: Race,
        attributes: ["nameRaza", "tamanioPromedio", "imagenRaza"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  return dogData;
};

module.exports = { dogBdd };
