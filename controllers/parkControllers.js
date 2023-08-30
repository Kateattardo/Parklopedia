///////////////////////////////////////////////
////// Import Dependencies
////////////////////////////////////////
const express = require('express')
require('dotenv').config()

const Park = require('../models/park')
const park = require('../models/park')

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

      res.render('parks/index', { parks })
    })
    .catch(error => console.error)
})
//New
router.get('/new', checkLogin, (req, res) => {
  Park.find({})
  res.render('parks/new', {title: 'Add a new Park'})
})
//create
router.post('/', checkLogin, (req, res) => {
  // need to assign owner
  req.body.owner = req.user._id
  // handle our checkbox
  req.body.walkingTrail = req.body.walkingTrail === 'on' ? true : false;
  req.body.bbqPicnic = req.body.bbqPicnic === 'on' ? true : false;
  req.body.dogRun = req.body.dogRun === 'on' ? true : false;
  req.body.playground = req.body.playground === 'on' ? true : false;

  console.log(req.body)
  Park.create(req.body)
      .then(park => {
          res.redirect(`/parks/${park._id}`)
      })
      .catch(err => {
          console.log(err)
          res.redirect('/parks/new')
      })
})
//edit
router.get('/edit/:id', checkLogin, (req, res) => {
  Park.findById(req.params.id)
  .then(park => {
    console.log('found this park', park)

    res.render('parks/edit', { park, title: `Edit ${park.name}`})
  })
  .catch(error => console.error)
})
//update
router.patch('/:id', checkLogin, (req, res) => {
  // handle our checkbox
  req.body.walkingTrail = req.body.walkingTrail === 'on' ? true : false;
  req.body.bbqPicnic = req.body.bbqPicnic === 'on' ? true : false;
  req.body.dogRun = req.body.dogRun === 'on' ? true : false;
  req.body.playground = req.body.playground === 'on' ? true : false;

  Park.findById(req.params.id)
      .then(park => {
          if (req.user && park.owner == req.user.id) {
              return park.updateOne(req.body)
          } else {
              res.send('something went wrong')
          }
      })
      .then(data => {
          console.log('what is returned from updateOne', data)

          res.redirect('/parks')
      })
      .catch(error => console.error)
})
//delete
router.delete('/:id', checkLogin, (req, res) => {
  // we want to find the park
  Park.findById(req.params.id)
      // then we want to delete the park
      .then(park => {
          if (req.user && park.owner == req.user.id) {
              return park.deleteOne()
          } else {
              res.send('something went wrong')
          }
      })
      // then redirect the user
      .then(data => {
          console.log('returned from deleteOne', data)
          res.redirect('/parks')
      })
      // catch any errors
      .catch(error => console.error)
})
//show
router.get('/:id', (req, res) => {
  Park.findById(req.params.id)
  .then(parks => {
    console.log('found this park', park)

    res.render("parks/show", { park, title:`${park.name}`})
  })
  .catch(error => console.error)
})



///////////////////////////////////////////////
////// export the router
////////////////////////////////////////
module.exports = router
