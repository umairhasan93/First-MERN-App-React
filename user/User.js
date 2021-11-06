var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

    name: String,
    username: String,
    email: String,

});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');