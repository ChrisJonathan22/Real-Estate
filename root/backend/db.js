const mongoose = require('mongoose');

mongoose.connect('mongodb://chris:chris22@ds211774.mlab.com:11774/realestate', { useUnifiedTopology: true });

const connect = mongoose.connection;   

module.exports.connect = connect;  