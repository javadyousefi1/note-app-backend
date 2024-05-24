const { Router } = require("express");
const router = Router();
// routes   
const userRoute = require("./users.routes");
const auth = require("./auth.routes");

router.use("/users", userRoute);
router.use("/auth", auth);

module.exports = router;
