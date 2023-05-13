const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "race",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nameRaza: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tamanioPromedio: {
        type: DataTypes.ENUM("mini", "pequenias", "medianas", "grande"),
        allowNull: false,
      },
      imagenRaza: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
      cualidades: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
