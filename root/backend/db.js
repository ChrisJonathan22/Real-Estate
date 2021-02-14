const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chris:chris22@realestate.7fgke.mongodb.net/realestate?retryWrites=true&w=majority', { useUnifiedTopology: true });

const connect = mongoose.connection;   

module.exports.connect = connect;  