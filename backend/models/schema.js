const mongoose = require('mongoose');
const eventSchema = {
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

const Event = new mongoose.model("event", eventSchema);
module.exports = Event;