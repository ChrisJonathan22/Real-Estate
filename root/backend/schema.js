const mongoose = require('mongoose');

let propertySchema = new mongoose.Schema({ 
    image: String,
    price: Number,
    bedroom: Number,
    location: String,
    propertyType: String,
    contractType: String
});

const property = mongoose.model('properties', propertySchema);

module.exports.property = property;  