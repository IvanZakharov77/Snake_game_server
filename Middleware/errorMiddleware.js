const ErrorHeandler = require("../errorHandler/ErrorHeandler");

module.exports = function (err, req, res, next) {
  if (err instanceof ErrorHeandler) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "непредвиденная ошибка" });
};
