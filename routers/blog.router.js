const express = require('express')
const jwt = require('jsonwebtoken')
const blog_controller = require('../controllers/blog.controller')
const { protectRouter, adminPermissions, isAdmin  } = require('../controllers/permission.controller');

const dotenv = require('dotenv')
dotenv.config()

const JWT_KEY = process.env.sk;

const blogRouter = express.Router();

blogRouter.get('/', blog_controller.blog_index)     // getting all blogs

blogRouter.post('/', protectRouter, blog_controller.blog_post)      // bot creating blog post route

blogRouter.get('/post', adminPermissions, (req, res)=>{
    const token = req.cookies.tkn;
    let isAdminLoggedIn = false;
    if(token){
        let payload = jwt.verify(token, JWT_KEY);
        if(payload) isAdminLoggedIn = isAdmin(payload.payload);
    }
    res.render('create', { title: 'Admin | Blog Post', isAdmin: isAdminLoggedIn })
})
blogRouter.post('/post', adminPermissions, blog_controller.blog_post)     // admin creating blog post route

blogRouter.get('/:id', blog_controller.blog_details)    // getting details of a perticular blog
blogRouter.delete('/:id', adminPermissions, blog_controller.blog_delete)      // admin deleting a perticular blog

module.exports = blogRouter
