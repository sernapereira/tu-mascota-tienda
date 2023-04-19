const { Router } = require("express");
const {
  getDogHandlers,
  getDogByIdHandler,
  postDogHandler,
  putDogHandler,
  deletDogHandler,
} = require("../Handlers/dogHandlers");

const dogRouter = Router();

dogRouter.get("/", getDogHandlers);
dogRouter.get("/:id", getDogByIdHandler);
dogRouter.post("/", postDogHandler);
dogRouter.put("/", putDogHandler);
dogRouter.delete("/:id", deletDogHandler);

module.exports = dogRouter;
