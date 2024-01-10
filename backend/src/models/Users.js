const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        requiered: true,
        unique: true
    },
    password: String,
})

module.exports = model('User', userSchema);