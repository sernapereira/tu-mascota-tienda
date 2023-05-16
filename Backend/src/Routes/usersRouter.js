const { Router } = require("express");
const {
  getUserHandlers,
  getUserByIdHandler,
  postUserHandler,
  putUserHandler,
  deletUserHandler,
} = require("../Handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/", getUserHandlers);
usersRouter.get("/:id", getUserByIdHandler);
usersRouter.post("/", postUserHandler);
usersRouter.put("/", putUserHandler);
usersRouter.delete("/:id", deletUserHandler);

module.exports = usersRouter;
