const mongoose = require("mongoose");

const connectionMongo = async(URL)=>{
    return await mongoose.connect(URL);
}

module.exports = connectionMongo;