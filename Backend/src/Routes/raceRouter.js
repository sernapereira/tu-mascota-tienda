const { Router } = require("express");
const {
  getRaceHandlers,
  getRaceByIdHandler,
  postRaceHandler,
  putRaceHandler,
  deletRaceHandler,
} = require("../Handlers/raceHandlers");

const raceRouter = Router();

raceRouter.get("/", getRaceHandlers);
raceRouter.get("/:id", getRaceByIdHandler);
raceRouter.post("/", postRaceHandler);
raceRouter.put("/", putRaceHandler);
raceRouter.delete("/:id", deletRaceHandler);

module.exports = raceRouter;
