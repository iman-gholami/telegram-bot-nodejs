const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    chatId: { type: Number, required: true, unique: true }
})



const User = mongoose.model('User', userSchema);


module.exports = User ;