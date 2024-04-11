const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   password :{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phone: {
        type: Number,
        required: false

    },
    email: {
        type: email,
        required: false
    },
    is_voted: {
        type: Boolean,
        default: false
    },
    adharCardNumber: {
        type: Number,
        required: true,
        unique:true
    },
    role:{
        type:String,
        enum:["voter","admin"],
        default:"voter"
    }

});

const User = mongoose.model("Users", UserSchema);

module.exports = User;