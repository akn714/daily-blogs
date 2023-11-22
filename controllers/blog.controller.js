const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const { isAdmin } = require('./permission.controller')

const dotenv = require('dotenv')
dotenv.config()

const JWT_KEY = process.env.sk;

const blog_index = (req, res)=>{
    const token = req.cookies.tkn;
    let isAdminLoggedIn = false;
    if(token){
        let payload = jwt.verify(token, JWT_KEY);
        if(payload) isAdminLoggedIn = isAdmin(payload.payload);
    }
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', { title: 'HOME', blogs: result, isAdmin: isAdminLoggedIn })
    })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found', isAdmin: isAdminLoggedIn })
    })
}

const blog_details = (req, res)=>{
    const id = req.params.id;
    const token = req.cookies.tkn;
    let isAdminLoggedIn = false;
    if(token){
        let payload = jwt.verify(token, JWT_KEY);
        if(payload) isAdminLoggedIn = isAdmin(payload.payload);
    }
    Blog.findById(id)
    .then((result)=>{
            res.render('details', { title: 'DETAILS', blog: result, isAdmin: isAdminLoggedIn })
    })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found', isAdmin: isAdminLoggedIn })
    })
}

const blog_post = (req, res)=>{
    const token = req.cookies.tkn;
    let isAdminLoggedIn = false;
    if(token){
        let payload = jwt.verify(token, JWT_KEY);
        if(payload) isAdminLoggedIn = isAdmin(payload.payload);
    }
    const newBlog = new Blog(req.body);
    newBlog.save()
    .then((result)=>{ res.redirect('/') })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found', isAdmin: isAdminLoggedIn })
    })
}

const blog_delete = (req, res)=>{
    const token = req.cookies.tkn;
    let isAdminLoggedIn = false;
    if(token){
        let payload = jwt.verify(token, JWT_KEY);
        if(payload) isAdminLoggedIn = isAdmin(payload.payload);
    }
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/'})
    })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found', isAdmin: isAdminLoggedIn })
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_post,
    blog_delete
}