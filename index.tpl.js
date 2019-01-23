const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/nodejs', { useNewUrlParser: true });
console.log(`
    *****************************************
    **********                     **********
    **********  MongoDB Connected  **********
    **********                     **********
    *****************************************`);

app.get('/test', (req, res) => {
    res.json({
        data: 'something',
        test: true
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