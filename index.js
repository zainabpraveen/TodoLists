
const express = require('express');
const path=require('path');
const port=8000;

const db= require('./config/mogoose');
const Todo= require('./models/todo');

const app = express();
//middleware
app.use(express.urlencoded());

//middleware
app.use(express.static('asset'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//use express router
app.use('/',require('./routes'));

app.listen(port, function(err){
 if(err){
    
    console.log(`Error in running  the server: ${err}`);
 }
 console.log(`Server is running on port : ${port}`);
});