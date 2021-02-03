var express = require('express');
var router = express.Router();
const BlogPostsController = require('../controllers/blogposts_controller')

router
    .get('/', BlogPostsController.getHomepage)
    .get('/create', BlogPostsController.getCreate)
    .post('/posts', BlogPostsController.postCreate)
    .get('/blogposts/:id', BlogPostsController.getBlogPost)
    .post('/blogposts/:id', BlogPostsController.postUpdate)
    .get('/:slug', BlogPostsController.getBySlug)
    .delete('/blogposts/:id', BlogPostsController.delete)

module.exports = router;
