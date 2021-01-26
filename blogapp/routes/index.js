var express = require('express');
var router = express.Router();
const BlogPost = require('../models/BlogPost')

router
    .get('/', async (req, res) => {
      const blogPosts = await BlogPost.find()

      res.render('index', { title: 'Express', blogPosts: blogPosts });
    })
    .get('/create', (req, res) => {
      res.render('create')
    })
    .post('/posts', async (req, res) => {
      try {
        const blogPost = new BlogPost(req.body)

        await blogPost.save()
      } catch (err) {
        console.log(err)
      }
      
      res.redirect('/')
    })

module.exports = router;
