const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    data: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    }
})

module.exports = mongoose.model('Booking', bookingSchema);