const { Router } = require("express");
const dogRouter = require("./dogRouter");
const raceRouter = require("./raceRouter");
const usersRouter = require("./usersRouter");
const adminRouter = require("./adminRouter");

const router = Router();

router.use("/dog", dogRouter);
router.use("/race", raceRouter);
router.use("/users", usersRouter);
router.use("/admin", adminRouter);

module.exports = router;
