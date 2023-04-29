const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3002, () => {
  sequelize.sync({ force: false });
  console.log("listening on port 3002 🎶 ------------->> ✔✔");
});
