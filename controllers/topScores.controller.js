const db = require("../db");
const ErrorHeandler = require("../errorHandler/ErrorHeandler");
class TopScoresGamers {
  async getTopScore(req, res, next) {
    const newPoint = await db.query(
      `SELECT * FROM gamer order by  points desc limit 5`
    );

    res.json(newPoint.rows);
  }
}
module.exports = new TopScoresGamers();
