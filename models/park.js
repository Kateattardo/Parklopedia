//////////////////////////////////////
//////////Schema and model for Park resource
/////////////////////////////


//mongoose connection from utils
const mongoose = require('../utils/connection')
//import commentSchema, to use as subdoc
const commentSchema = require('./comment')


// destruct the Schema/model fucntion from mongoose
const { Schema, model } = mongoose

// Parks schema
const parkSchema = new Schema({
  name: {
      type: String
  },
  desc: {
      type: String
  },
  walkingTrail: {
      type: Boolean
  },
  bbqPicnic: {
    type: Boolean
  },
  dogRun: {
    type: Boolean
  },
  playground: {
    type: Boolean
  },
  rating: {
    type: Number
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  parkId: {
    type: String,
    unique:true
  },
 comments: [commentSchema],
 reviews: [reviewSchema]
}, { timestamps: true })

//review Schema
const reviewSchema = new Schema({
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  
  },
  parkId: {
    type: String,
    unique:true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

// make the park model
// the model method takes two arguments
// the first is what we call our model
// the second is the schema used to build the model
const Park = model('Park', parkSchema)




// export the park and review schema
module.exports = Park
