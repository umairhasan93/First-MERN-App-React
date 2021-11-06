const Order = require("./Order");
const express = require("express");

var router = express.Router();

// CREATES A NEW USER
router.post('/', function (req, res) {
    Order.create({
        name: req.body.name,
        email: req.body.email,
        food: req.body.food,
    },
        function (err, order) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(order);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Order.find({}, function (err, orders) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(orders);
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:_id', function (req, res) {
    console.log(req.params._id);
    console.log(req.body);
    Order.findByIdAndUpdate(req.params._id, req.body, { new: true }, function (err, order) {
        if (err) return res.status(500).send("There was a problem updating the order.");
        res.status(200).send(order);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:_id', function (req, res) {
    Order.findByIdAndRemove(req.params._id, function (err, order) {
        if (err) return res.status(500).send("There was a problem deleting the order.");
        res.status(200).send({ message: "User: " + order.name + " was deleted." });
    });
});

module.exports = router;