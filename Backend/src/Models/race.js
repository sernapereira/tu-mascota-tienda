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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tamanioPromedio: {
        type: DataTypes.ENUM("mini", "pequenias", "medianas", "grande"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
