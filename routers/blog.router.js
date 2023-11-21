const express = require('express')
const blog_controller = require('../controllers/blog.controller')
const { protectRouter,  } = require('../controllers/permission.controller');

const blogRouter = express.Router();

blogRouter.get('/', blog_controller.blog_index)
blogRouter.get('/:id', blog_controller.blog_details)

blogRouter.post('/', protectRouter, blog_controller.blog_post)

blogRouter.use(adminPermissions)
blogRouter.delete('/:id', blog_controller.blog_delete)

module.exports = blogRouter