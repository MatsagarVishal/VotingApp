
const express= require("express");
const app=express();

const bodyparser= require("body-parser");
app.use(bodyparser.json());
// Databse connection
require("./db/conn");

// routes
const userRoute=require("./routes/userRoute");

// envirement varialbles
require('dotenv');
const PORT = process.env.PORT || 3300;


app.use("/",userRoute);

app.listen(PORT,()=>{
    console.log(`server is listing on https://localhost:${PORT}/`);
});

