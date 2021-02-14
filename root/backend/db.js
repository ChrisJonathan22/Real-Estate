const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING, { useUnifiedTopology: true });

const connect = mongoose.connection;   

module.exports.connect = connect;  