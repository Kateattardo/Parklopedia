////////////////////////////////////////////////////
//// Our schema and model for the user resource ////
////////////////////////////////////////////////////
// we want our mongoose object to relate to our db
// we're going to bring in the mongoose connection from our utils
const mongoose = require('../utils/connection')

// we'll destructure the Schema and model functions from mongoose
const { Schema } = mongoose

//comment Schema
const commentSchema = new Schema({
  note: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: {
    type: Number,
    min: 1,
    max:5,
  },
  topic: {
    type: String,
  },
}, {
  timestamps: true
})

//this is a subdoc, so we'll just export the Schema
//we wont' make this a model

module.exports = commentSchema