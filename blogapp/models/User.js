const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: ['Name is required']
  },
  id_card_number: {
    type: String,
    required: ['ID card number is required'],
    unique: true
  }
})

module.exports = mongoose.model('User', schema)
