const Blog = require('../models/blog')

const blog_index = (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', { title: 'HOME', blogs: result })
    })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found' })
    })
}

const blog_details = (req, res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{ res.render('details', { title: 'DETAILS', blog: result }) })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found' })
    })
}

const blog_post = (req, res)=>{
    const newBlog = new Blog(req.body);
    newBlog.save()
    .then((result)=>{ res.redirect('/') })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found' })
    })
}

const blog_delete = (req, res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/'})
    })
    .catch((err)=>{
        res.status(404).render('404', { title: '404 blog not found' })
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_post,
    blog_delete
}