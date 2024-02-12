const express = require('express');
const app=express();
const db = require("./models");
const cors = require('cors');
app.use(express.json());
app.use(cors());


const serverRouters=require('./)





db.sequelize.sync().then (()=>{
    
app.listen(3001,()=>{
    console.log("server running on port 3001")
});


})






