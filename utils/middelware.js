// instead of filling server js with middelware
// we can process all of it here, and call it like a function
//in server.js
//this function takes the app as an argument and runs middleware
//on as part of the request/response cycle


////////////////////////////////////////
/////Import Dependecies
///////////////////////////////////////
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
require('./passport')


const middleware = (app) => {
  console.log('middleware function running')
  app.use(methodOverride('_method'))
  app.use(morgan('tiny'))
  app.use(express.urlencoded({extended: true}))
  app.use(express.static('public'))
  app.use(express.json())
  //we can also set up session for authentication
  app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use((req, res, next) => {
    res.locals.user = req.user
    next()
  })
}


////////////////////////////////////////
/////Module to Export
///////////////////////////////////////
module.exports = middelware