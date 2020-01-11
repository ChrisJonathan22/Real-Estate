const mongoose = require('mongoose');

mongoose.connect('mongodb://chris:chris22@ds135335.mlab.com:35335/realestate', { useUnifiedTopology: true });

const connect = mongoose.connection;   

module.exports.connect = connect;  