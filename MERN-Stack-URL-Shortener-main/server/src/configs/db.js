const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = 'mongodb://localhost:27017/backendShort';

const connect = () => {
    return mongoose.connect(process.env.DB_URL);
};

module.exports = connect;