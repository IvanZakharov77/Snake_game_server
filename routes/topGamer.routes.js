const Router = require("express");
const router = new Router();
const topScores = require("../controllers/topScores.controller");

router.get("/topGamer", topScores.getTopScore);

module.exports = router;
