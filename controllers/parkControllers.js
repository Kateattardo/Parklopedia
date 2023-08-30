///////////////////////////////////////////////
////// Import Dependencies
////////////////////////////////////////
const express = require('express')
require('dotenv').config()

const Park = require('../models/park')

//const axios = require('axios')

const router = express.Router()

///////////////////////////////////////////////
////// Routes & Controllers
////////////////////////////////////////
//Index
router.get('/', (req, res) => {
    Park.find({})
    .then(parks => {
      console.log('found these parks', parks)

      res.json(parks)
    })
    .catch(error => console.error)
})
//New
router.get('/new', (req, res) => {
  Park.find({})
  res.send('the new page')
})
//create
//edit
router.get('/edit/:id', (req, res) => {
  Park.findById(req.params.id)
  .then(parks => {
    console.log('found this park', park)

    res.send(`Edit page for ${park.name}`)
  })
  .catch(error => console.error)
})
//update
//delete
//show
router.get('/:id', (req, res) => {
  Park.findById(req.params.id)
  .then(parks => {
    console.log('found this park', park)

    res.json(park)
  })
  .catch(error => console.error)
})



///////////////////////////////////////////////
////// export the router
////////////////////////////////////////
module.exports = router
