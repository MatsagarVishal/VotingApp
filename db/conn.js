const mongoose = require("mongoose");
require('dotenv').config();
// const dbURL =;


mongoose.connect( 'mongodb://127.0.0.1:27017/votingApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(() => {
    console.log("Database conection successful");
}).catch((e) => {
    console.log("Failled to connect with db", e);
})

