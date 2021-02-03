const { random } = require('faker')
const faker = require('faker')
const mongoose = require('mongoose')
const User = require('../models/User')

mongoose.connect(
  'mongodb://localhost:27017/blogapp', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

for (let i = 0; i < 3; i++) {
  (new User({
    name: faker.name.findName(),
    id_card_number: random.uuid()
  })).save().then().catch()
}
