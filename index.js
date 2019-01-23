const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongo_url, { useNewUrlParser: true });
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

app.listen(config.port, () => {
    console.log(`
    *****************************************
    *******                          ********
    ******* API running on PORT 8000 ********
    *******                          ********
    *****************************************`);
});