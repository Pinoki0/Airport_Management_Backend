const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tourist = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    country: {
        type: String
    },
    remarks: {
        type: String
    },
    birthDate: {
        type: Date
    },
    flightsList: {
        type: []
    }
});

module.exports = mongoose.model('Tourist', Tourist);


