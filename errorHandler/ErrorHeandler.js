class ErrorHeandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
  static unauthorizedError(message) {
    return new ErrorHeandler(401, message);
  }
}
module.exports = ErrorHeandler;
