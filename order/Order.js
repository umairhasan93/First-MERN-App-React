var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    food: String,

});
mongoose.model('Order', OrderSchema);

module.exports = mongoose.model('Order');