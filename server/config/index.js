require("dotenv").config();

const path = require("path");

module.exports = {
  database: {
    cs: process.env.DB_URI,
  },
  development: {
    sitename: "Roux Meetups [Development]",
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
