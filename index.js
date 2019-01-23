const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://nicho:nicho.01@ds211265.mlab.com:11265/nodejs', { useNewUrlParser: true });
console.log(`
    *****************************************
    **********                     **********
    **********  MongoDB Connected  **********
    **********                     **********
    *****************************************`);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const frutasRouter = require('./modules/frutas')(express, mongoose);
app.use('/frutas', frutasRouter);

app.listen(8000, () => {
    console.log(`
    *****************************************
    *******                          ********
    ******* API running on PORT 8000 ********
    *******                          ********
    *****************************************`);
});