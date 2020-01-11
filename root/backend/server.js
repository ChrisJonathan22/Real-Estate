const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
const { connect } = require('./db');
const { property } = require('./schema');
const fs = require('fs');

app.use(bodyParser.json({ limit: '15mb', extended: true }));

app.use(cors());

app.use((req, res, next) => {   // Allow cross origin requests.
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', () => {
    console.log('Database connection successful');
});

app.get('/properties', (req, res) => {
    let base64;
    let image = fs.readFile('../frontend/src/Assets/home_hero.jpg', (err,file) => {
        base64 = file.toString('base64');
     
        let newProperty = new property({ price: 100000, bedroom: 3, location: "Dunston", propertyType: "Flat", contractType: 'Let', image: base64 });
        newProperty.save((err, property) => {
            if (err) console.error(error);
            else {
                console.log('Property successfully added!!!');
                console.log(newProperty);
            }
        });
    });
   
    res.json({ message: "Request successful" });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));