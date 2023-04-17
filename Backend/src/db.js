const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const dogModel = require("./Models/dog");
const raceModel = require("./Models/race");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/mascotatienda`,
  {
    logging: false,
    native: false,
  }
);

const { dog, race } = sequelize.models;

race.hasMany(dog);
dog.belongsTo(race);



dogModel(sequelize);
raceModel(sequelize);

module.exports = { sequelize };
