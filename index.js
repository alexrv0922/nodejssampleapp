const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/nodejs', { useNewUrlParser: true });
const frutas = require('./models/frutas')(mongoose);
console.log(`
    *****************************************
    **********                     **********
    **********  MongoDB Connected  **********
    **********                     **********
    *****************************************`);

app.get('/frutas', (req, res) => {
    frutas.find({}, (err, docs) => {
        if (err) throw err;

        res.json(docs);
    });
});

app.listen(8000, () => {
    console.log(`
    *****************************************
    *******                          ********
    ******* API running on PORT 8000 ********
    *******                          ********
    *****************************************`);
});