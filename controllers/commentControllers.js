//////////////////////////////
//// Import Dependencies  ////
//////////////////////////////
const express = require('express')
require('dotenv').config()

const Park = require('../models/park')
const checkLogin = require('../utils/ensureLoggedIn')
const park = require('../models/park')

const router = express.Router()

//////////////////////////////
//// Routes + Controllers ////
//////////////////////////////

// Create
router.post('/:parkId', checkLogin, (req, res) => {
    // need to assign owner
    req.body.author = req.user._id

    // find the park
    Park.findById(req.params.parkIdId)
        // push the comment into the comments array
        // save the park
        .then(park => {
            park.comments.push(req.body)

            return park.save()
        })
        // redirect
        .then(park => {
            res.redirect(`/parks/${park._id}`)
        })
        // handle errors
        .catch(error => console.error)
})

// edit
// hint for subdoc update -> render a form similar to how we updated the fruit
router.get('/edit/:id', checkLogin, (req, res) => {
    res.send('commend edit form')
})

// Update
// update route should follow the same steps as delete, but with update instead of delete
// look up update methods in the mongoose docs
router.patch('/:id', checkLogin, (req, res) => {
    res.send('edit comment route')
})

// Delete
router.delete('/:parkId/:commentId', checkLogin, (req, res) => {
    const fId = req.params.parkId
    const cId = req.params.commentId
    // find the fruit
    Park.findById(pId)
        .then(park => {
            // isolate the comment
            const theComment = park.comments.id(cId)
            // check for ownership
            if (req.user && theComment.author == req.user.id) {
                // run a document method to remove the comment(could also use .remove())
                theComment.deleteOne()
                // save the parent model
                return park.save()
            } else {
                res.send('something went wrong')
            }
        })
        .then(park => {
            // redirect to the show page
            res.redirect(`/parkss/${park._id}`)
        })
        .catch(error => console.error)
})


////////////////////////////
//// Export the Router  ////
////////////////////////////
module.exports = router