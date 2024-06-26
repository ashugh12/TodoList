const  express= require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const app= express();
require("./connection/connection")
const  auth = require("./routes/auth");
const  list = require("./routes/list");
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello")
})
app.use("/api/v1", list);
app.use("/api/v2", auth);
// mongoose.connect(process.env.MONGO_URL).then(
//     app.listen(5000, ()=>{
//         console.log(`connected with db and http://localhost:5000/`);
//     })
// )
app.listen(5000, ()=>{
    console.log(`http://localhost:5000/`);
})
