const db = require("../db");
const ErrorHeandler = require("../errorHandler/ErrorHeandler");
class UserController {
  async createUser(req, res, next) {
    const resp = (inf) => {
      res.json(inf);
    };
    const { name, password } = req.body;
    if (!name || !password) {
      return next(
        ErrorHeandler.unauthorizedError(
          `одна из строк: "name" или "password" пустые, заполните пожалуйста их`
        )
      );
    }
    // console.log(name);
    const user = await db.query(`SELECT * FROM gamer WHERE name = '${name}'
      `);

    // console.log(user.rows[0]);
    if (!user.rows[0]) {
      var newPerson = await db.query(
        `INSERT INTO gamer (name, password) values ($1, $2) RETURNING *`,
        [name, password]
      );

      resp({
        status: `поздравляем с регистрацией, приятной игры`,
        code: 200,
        message: "name success",
        id: newPerson.rows[0].id,
      });
    } else if (user.rows[0]) {
      user.rows[0] && user.rows[0].password === password
        ? resp({
            status: `вы успешно вошли под своим именем`,
            code: 200,
            message: "name success",
            id: user.rows[0].id,
          })
        : next(
            ErrorHeandler.unauthorizedError(
              "это имя уже есть в базе, введите верный пароль или зарегестрируйтесь под новым именем"
            )
          );
    }
  }

  async getUsers(req, res) {
    try {
      const users = await db.query(`SELECT * FROM gamer`);
      res.json(users.rows);
    } catch (error) {
      console.error(error);
    }
  }
  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query(`SELECT * FROM gamer where id = $1`, [id]);
      res.json(user.rows[0]);
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = new UserController();
