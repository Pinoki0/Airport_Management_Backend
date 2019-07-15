const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Flight = new Schema({
    departureDate: {
        type: Date
    },
    arrivalDate: {
        type: Date
    },
    seatsNumber: {
        type: Number
    },
    touristsList: {
        type: []
    },
    ticketPrice: {
        type: Number
    }
});

module.exports = mongoose.model('Flight', Flight);


