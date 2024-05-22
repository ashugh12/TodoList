const  express= require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const app= express();
require("./connection/connection")


app.get("/", (req, res)=>{
    res.send("hello")
})

// mongoose.connect(process.env.MONGO_URL).then(
//     app.listen(5000, ()=>{
//         console.log(`connected with db and http://localhost:5000/`);
//     })
// )
app.listen(5000, ()=>{
    console.log(`http://localhost:5000/`);
})
