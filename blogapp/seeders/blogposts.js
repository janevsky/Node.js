const faker = require('faker')
const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost')

mongoose.connect(
  'mongodb://localhost:27017/blogapp', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

// DRY - Don't Repeat Yourself

for (let i = 0; i < 10; i++) {
  (new BlogPost({
    title: faker.lorem.sentence().slice(0, -1),
    content: faker.lorem.paragraph()
  })).save()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log("se sluci greska: ", err)
      })
}