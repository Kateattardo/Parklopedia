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
    tupe: String,
    required: true
  },
  owner: {
    type: Schema.Types.objectsId,
    ref: 'User'
  }
}, {
  timestamps: true
})

//this is a subdoc, so we'll just export the Schema
//we wont' make this a model

module.exports = commentSchema