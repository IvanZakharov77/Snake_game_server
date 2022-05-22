const db = require("../db");
class SizeSnakeController {
  async createSizeSnake(req, res) {
    try {
      const { point, stateId } = req.body;

      const user = await db.query(`SELECT * FROM gamer WHERE id = '${stateId}'
      `);

      const updatePoint = db.query(
        `UPDATE gamer SET points = '${point}' WHERE id = '${stateId}'`
      );
      res.json(updatePoint);
    } catch (error) {
      console.error(error);
    }
  }

  async getSizeSnakeByUser(req, res) {
    const id = req.query.id;
    const sizeSnake = await db.query(`select * from gamer where id = $1`, [id]);
    res.json(sizeSnake.rows);
  }
}

module.exports = new SizeSnakeController();
