const mongoose = require('mongoose');
// const {isEmail} = require('validator');
// const bcrypt = require('bcrypt');

const treeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
    },
    latitude: {
        type: Number,
        required: [true, "Can't be blank"]
    },
    longitude: {
        type: Number,
        required: [true, "Can't be blank"]
    },
    Age: {
        type: String,
        // required: [true, "Can't be blank"]
    },
    type: {
        type: String,
        required: [true, "Can't be blank"]
    }
});

const Tree = new mongoose.model("Shop", treeSchema);
module.exports = Tree