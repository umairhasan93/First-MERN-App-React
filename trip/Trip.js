var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
    name: String,
    email: String,
    pickup: String,
    dropoff: String

});
mongoose.model('Trip', TripSchema);

module.exports = mongoose.model('Trip');