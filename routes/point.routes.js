const Router = require("express");
const router = new Router();
const pointSnakeController = require("../controllers/point.controller");

router.post("/point", pointSnakeController.createSizeSnake);
router.get("/point", pointSnakeController.getSizeSnakeByUser);

module.exports = router;
