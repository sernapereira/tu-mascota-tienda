const { Router } = require("express");
const dogRouter = require("./dogRouter");
const raceRouter = require("./raceRouter");
const usersRouter = require("./usersRouter");

const router = Router();

router.use("/dog", dogRouter);
router.use("/race", raceRouter);
router.use("/admin", usersRouter);

module.exports = router;
