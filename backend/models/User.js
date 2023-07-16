const mongoose = require('mongoose');
// const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
    },
    email: {
        type: String,
        required: [true, "Can't be blank"]
    },
    phone: {
        type: String,
        required: [true, "Can't be blank"]
    },
    age: {
        type: Number,
        required: [true, "Can't be blank"]
    },
    address: {
        type: String,
        required: [true, "Can't be blank"]
    },
    password: {
        type: String,
        required: [true, "Can't be blank"]
    },
    events:{
        type: Array,
        default: []
    }

});

userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err);

        user.password = hash
        next();
      })

    })

})

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

const User = new mongoose.model("User", userSchema);
module.exports = User