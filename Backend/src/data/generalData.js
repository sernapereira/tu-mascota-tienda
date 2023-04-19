const { Dog, Race } = require("../db");

const dogBdd = async () => {
  const dogData = await Dog.findAll({
    include: [
      {
        model: Race,
        attributes: ["id","nameRaza", "tamanioPromedio", "imagenRaza"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  return dogData;
};

module.exports = { dogBdd };
