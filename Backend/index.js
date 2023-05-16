const app = require("./src/app");
const { sequelize } = require("./src/db");
require(`dotenv`).config();

app.listen(process.env.PORT, () => {
  sequelize.sync({ force: false });
  console.log(`listening on port  🎶 ------------->> ✔✔`, process.env.PORT);
});
