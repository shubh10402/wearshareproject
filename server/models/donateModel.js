const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema({
    ImageURL: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('donate', donateSchema);