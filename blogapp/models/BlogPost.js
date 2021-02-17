const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: {
    type: String,
    required: ['Title is required'],
    unique: true
  },
  content: {
    type: String,
    required: ['Content is required']
  },
  view_count: {
    type: Number,
    default: 0
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('BlogPost', schema)
