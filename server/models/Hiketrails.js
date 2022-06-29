const mongoose = require('mongoose');

const HiketrailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    desc: {
        type: String ,
        required: true
    },
    open: {
        type: Boolean ,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    picture_url: {
        type: String ,
        required: false
    },
    usershere: {
        type: Array ,
        required: false
    },
});

const HiketrailsModel = mongoose.model("hiketrails", HiketrailsSchema);

module.exports = HiketrailsModel;