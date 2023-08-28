////////////////////////////////////////
/////Import Dependecies
///////////////////////////////////////
const express = require('express')
require('dotenv').config()
const path= require('path')

//Middelware for this file

//routers/controllers will be imported here

const app = express()

//set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

////////////////////////////////////////
/////Middelware
///////////////////////////////////////


////////////////////////////////////////
/////Routes
///////////////////////////////////////
app.get('/', (req, res) => {
  res.send('welcome to Parklopedia')
})




////////////////////////////////////////
/////server listener
///////////////////////////////////////
const PORT= process.env.port
app.listen(PORT, () => {
  console.log('Parklopedia is ready')

})