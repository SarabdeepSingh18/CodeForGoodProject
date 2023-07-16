const mongoose = require('mongoose');
const furEvent = {
    title : {
        type: String,
        required : true
    },
    date: {
        type:String,
        required: true
    },
    content : {
        type: String,
        required : true
    },
    organizer: {
        type: String,
        required : true
    },
    location: {
        type: String,
        required : true
    }
}

const Future = new mongoose.model("future",furEvent);
module.exports = Future;