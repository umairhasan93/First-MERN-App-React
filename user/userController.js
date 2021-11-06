const User = require("./User");
const express = require("express");

var router = express.Router();

// CREATES A NEW USER
router.post('/', function (req, res) {
    console.log(req.body);
    User.create({

        name: req.body.name,
        username: req.body.username,
        email: req.body.email,

    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:_id', function (req, res) {
    console.log(req.params._id);
    console.log(req.body);
    User.findByIdAndUpdate(req.params._id, req.body, { new: true }, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:_id', function (req, res) {
    console.log(req.params._id);
    User.findByIdAndRemove(req.params._id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send({ message: "User: " + user.name + " was deleted." });
    });
});




module.exports = router;