//////////////////////////////////////
//////////Schema and model for Park resource
/////////////////////////////


//mongoose connection from utils
const mongoose = require('../utils/connection')
//import commentSchema, to use as subdoc
const commentSchema = require('./comment')

// destruct the Schema/model fucntion from mongoose
const { Schema, model } = mongoose

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
    ref: 'User',
    required: true
  },
  parkId: {
    type: String,
    unique:true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

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
  }
  owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  rating: {
    type: Number
  },
  parkId: {
    type: String,
    unique:true
  },
 comments: [commentSchema]
}, { timestamps: true })

// export the park and review schema
module.exports = mongoose.model('Park', parkSchemaSchema);