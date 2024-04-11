const mongoose = require("mongoose");
require('dotenv').config();
const URI =process.env.url;


mongoose.connect( URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(() => {
    console.log("Database conection successful");
}).catch((e) => {
    console.log("Failled to connect with db", e);
})

