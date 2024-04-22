const mongoose = require("mongoose");

module.exports.connect = async (dsn, dbName) =>
  mongoose.connect(dsn, { dbName });
