const express = require('express');
const colog = require('colog');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require('morgan');
const passport = require('passport');

require('dotenv').config();

const app = express();

// MIDDLEWARES 
app.use(morgan('tiny'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use(passport.initialize())

// IMPORT ROUTES 
const routes = require('./routes');


app.use('/api/v1/posts/', routes.post);
app.use('/api/v1/users/', routes.user);


// TEST API 
app.get('/',(req,res)=>{
    res.send("Yoooooo it's working!");
});


app.listen(process.env.PORT, ()=>{
    console.log('');
    colog.info('=======================================================')
    colog.info(`🚀 Server is running on http://localhost:${process.env.PORT}`);
    colog.info('=======================================================')
    console.log('');
   
});
 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    console.log('');
    colog.info('=======================================================')
    colog.info('🤖 Database is connected.')
    colog.info('=======================================================')
    console.log('');
}).catch(err=>{
    console.log('');
    colog.error('=======================================================')
    colog.error(err)
    colog.error('=======================================================')
    console.log('');
});
 