const Trip = require("./Trip");
const express = require("express");

var router = express.Router();

// CREATES A NEW USER
router.post('/', function (req, res) {
    Trip.create({
        name: req.body.name,
        email: req.body.email,
        pickup: req.body.pickup,
        dropoff: req.body.dropoff

    },
        function (err, trip) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(trip);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Trip.find({}, function (err, trips) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(trips);
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:_id', function (req, res) {
    console.log(req.params._id);
    console.log(req.body);
    Trip.findByIdAndUpdate(req.params._id, req.body, { new: true }, function (err, trip) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(trip);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:_id', function (req, res) {
    Trip.findByIdAndRemove(req.params._id, function (err, trip) {
        if (err) return res.status(500).send("There was a problem deleting the trip.");
        res.status(200).send({ message: "Trip: " + trip.name + " was deleted." });
    });
});

module.exports = router;