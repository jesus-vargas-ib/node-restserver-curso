require('./config/config');

const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

//init de la base de datos
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el en puerto: ', process.env.PORT);
})