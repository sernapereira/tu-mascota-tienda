const { Router } = require("express");
const { inicioSeccionHandler } = require("../Handlers/adminHandlers");

const adminRouter = Router();

adminRouter.post("/", inicioSeccionHandler);

module.exports = adminRouter;
