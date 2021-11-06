const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const db = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
global.__root = __dirname + '/';

app.get('/api', function (req, res) {
    res.status(200).send('API works.');
});

app.get("/api", function (req, res) {
    res.status(200).send('API works.');
})

app.get("/api", function (req, res) {
    res.status(200).send('API works.');
})



var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var OrderController = require(__root + 'order/OrderController');
app.use('/api/orders', OrderController);

var TripController = require(__root + 'trip/TripController');
app.use('/api/trips', TripController);

app.listen(5000, () => {
    console.log("server started");
});
