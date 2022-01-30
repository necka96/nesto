const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())
const dotenv = require('dotenv');

app.get("/", (req, res)=>{
 res.send("Dobrodosli na izreke api")
});
// app.get("/izreke", (req, res)=>{
//  res.send("ovo su izreke")
// })

const connectDb = require("./config/db")

// load congfig

dotenv.config({ path : "./config/config.env"})

connectDb()

// Routes 

app.use("/", require("./routes/index"))

app.use((req,res,next)=>{
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Origin", "*")
 if(req.method === "OTIONS"){
  res.header("Access-Control-Allow-Origin", "PUT, POST, PATCH, DELETE, GET")
  return res.status(200).json({})
 }
 next()
})
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});