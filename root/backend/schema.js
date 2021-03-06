const mongoose = require('mongoose');

let propertySchema = new mongoose.Schema({ 
    price: Number,
    bedroom: Number,
    location: String,
    propertyType: String,
    contractType: String,
    furnished: Boolean,
    image: String
});

const property = mongoose.model('properties', propertySchema);

module.exports.property = property;  