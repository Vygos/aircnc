const mongoose = require('mongoose');


const useSchema = new mongoose.Schema({
    email: String
})

module.exports = mongoose.model('User', useSchema);