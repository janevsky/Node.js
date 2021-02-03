const BlogPost = require('../models/BlogPost')
const User = require('../models/User')

module.exports = {
  getHomepage: async (req, res) => {
    const blogPosts = await BlogPost.find()

    res.render('index', { title: 'Express', blogPosts: blogPosts });
  },
  getCreate: async (req, res) => {
    let users = []

    try {
      users = await User.find()
    } catch (error) {
      console.log(error);
    }

    res.render('create', { users: users })
  },
  postCreate: async (req, res) => { 
    try {
      const blogPost = new BlogPost(req.body)

      await blogPost.save()
    } catch (err) {
      console.log(err)
    }
    
    res.redirect('/')
  },
  getBlogPost: async (req, res) => {
    try {
      var blogPost = await BlogPost.findById(req.params.id)
    } catch (error) {
      console.log('Error: ', error.message)
      res.redirect('/')
    }

    res.render('update', { blogPost: blogPost })
  },
  postUpdate: async (req, res) => {
    try {
      await BlogPost.updateOne({ _id: req.params.id }, {
        title: req.body.title,
        content: req.body.content
      })
    } catch (error) {
      console.log('Error: ', error.message)
    }

    res.redirect('/')
  },
  getBySlug: async (req, res) => {
    try {
      var blogPost = await BlogPost.findOne({ slug: req.params.slug })
      blogPost.view_count += 1
      await blogPost.save()
      
    } catch (error) {
      console.log(error)
    }

    res.render('show', { blogPost: blogPost })
  },
  delete: async (req, res) => {
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
  }
}