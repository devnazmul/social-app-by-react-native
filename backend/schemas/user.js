const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:false
    },
    profilePicture:{
        type:String,
        required:false,
        default: 'https://i.ibb.co/02q5FpM/avater.png'
    },
    password:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = {
    UserSchema
}