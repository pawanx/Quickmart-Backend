const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB;

const initializeDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to DB...");
    })
    .catch((error) => {
      console.log("Error connected to DB", error);
    });
};
module.exports = { initializeDB };
