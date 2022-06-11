const express = require('express');
require('dotenv').config();
const app = express();


app.get('/',(req,res)=>{
    res.send("Yoooooo it's working!");
});


app.listen(process.env.PORT, ()=>{
    console.log(`listanning on: http://localhost:${process.env.PORT}`);
});