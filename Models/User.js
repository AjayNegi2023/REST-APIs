const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type : String
    },
    job_title:{
        type: String
    }
    
},{timestamps:true})

//Model

const User = mongoose.model("user",userSchema);

module.exports = User;