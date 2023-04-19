const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3002, () => {
  sequelize.sync({ force: true });
  console.log("listening on port 3002 🎶 ------------->> ✔✔");
});
