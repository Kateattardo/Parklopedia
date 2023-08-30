////////////////////////////////////////
/////Import Dependecies
///////////////////////////////////////
const express = require('express')
require('dotenv').config()
const path= require('path')
const middelware = require('./utils/middelware')

//Middelware for this file

//routers/controllers will be imported here
const AuthRouter = require('./controllers/authControllers')
const ParkRouter = require('./controllers/parkControllers')
const CommentRouter = require('./controllers/commentControllers')

const app = express()

//set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

////////////////////////////////////////
/////Middelware
///////////////////////////////////////
middelware(app)


////////////////////////////////////////
/////Routes
///////////////////////////////////////
app.get('/', (req, res) => {
  res.redirect('/parks')
})

app.use('/', AuthRouter)
app.use('/parks', ParkRouterRouter)
app.use('/comments', CommentRouter)




////////////////////////////////////////
/////server listener
///////////////////////////////////////
const PORT= process.env.PORT
app.listen(PORT, () => {
  console.log('Parklopedia is ready')

})