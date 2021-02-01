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
    .get('/blogposts/:id', async (req, res) => {
      try {
        var blogPost = await BlogPost.findById(req.params.id)
      } catch (error) {
        console.log('Error: ', error.message)
        res.redirect('/')
      }

      res.render('update', { blogPost: blogPost })
    })
    .post('/blogposts/:id', async (req, res) => {
      try {
        await BlogPost.updateOne({ _id: req.params.id }, {
          title: req.body.title,
          content: req.body.content
        })
      } catch (error) {
        console.log('Error: ', error.message)
      }

      res.redirect('/')
    })
    .get('/:slug', async (req, res) => {
      try {
        var blogPost = await BlogPost.findOne({ slug: req.params.slug })
        blogPost.view_count += 1
        await blogPost.save()
        
      } catch (error) {
        console.log(error)
      }

      res.render('show', { blogPost: blogPost })
    })
    .delete('/blogposts/:id', async (req, res) => {
      let responseContent = {
        error: false,
        message: `Blog post with id ${req.params.id} is successfully removed`
      }

      try {
        await BlogPost.findByIdAndDelete(req.params.id)
      } catch (error) {
        responseContent.error = true
        responseContent.message = error.message
      }

      res.send(responseContent)
    })

module.exports = router;
