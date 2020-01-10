const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
const DB = require('./db').connect;
const model = require('./schema').property;
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

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', () => {
    console.log('Database connection successful');
});

app.get('/', (req, res) => {
    let base64;
    fs.readFile('../frontend/src/Assets/home_hero.jpg', (err,file) => {
        base64 = file.toString('base64');
        // res.json({ message: "Request successful", imageString: base64 });
    });
    let property = new model({ image:  base64, price: 100000, bedroom: 3, location: "Dunston", propertyType: "Flat", contractType: 'Let' });
    property.save((err, model) => {
        if (err) console.error(err);
        else {
            console.log('Property successfully added!!!');
            console.log(model);
        }
    })
    res.json({ message: "Request successful" });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));