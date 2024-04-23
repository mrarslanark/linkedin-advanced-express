require("dotenv").config();
const bunyan = require("bunyan");
const path = require("path");

const loggers = {
  development: () =>
    bunyan.createLogger({ name: "development", level: "debug" }),
  production: () => bunyan.createLogger({ name: "production", level: "info" }),
  test: () => bunyan.createLogger({ name: "test", level: "fatal" }),
};

module.exports = {
  database: {
    cs: process.env.DB_URI,
  },
  development: {
    sitename: "Roux Meetups [Development]",
    log: loggers.development,
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback.json"),
      avatars: path.join(__dirname, "../data/avatars"),
    },
    database: {
      name: process.env.DB_DEVELOPMENT,
    },
  },
  production: {
    sitename: "Roux Meetups",
    log: loggers.production,
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback.json"),
      avatars: path.join(__dirname, "../data/avatars"),
    },
    database: {
      name: process.env.DB_PRODUCTION,
    },
  },
  test: {
    sitename: "Roux Meetups [Test]",
    log: loggers.test,
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback-test.json"),
      avatars: path.join(__dirname, "../data/avatars/test"),
    },
    database: {
      name: process.env.DB_TEST,
    },
  },
};
