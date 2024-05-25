const { Signup } = require("../controllers/Authcontroller");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;