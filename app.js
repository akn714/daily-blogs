const express = require('express');
const blogRouter = require('./routers/blog.router');
const adminRouter = require('./routers/admin.router')
const logger = require('./logger');

const app = express();

const dotenv = require('dotenv')
dotenv.config()

// connection string to connect to mongodb atlas (online)
const dbURI = process.env.DB_LINK

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    console.log('connected to db')
    app.listen(3000, ()=>{
        console.log('app running on http://localhost:3000')
    })
})
.catch((err)=>{ console.log(err)} )

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(logger)     // middleware for loging method and path of request

app.set('view engine', 'ejs');

app.set('views', 'myviews');  // defaults to 'views' instead of 'myviews'

app.get('/', (req, res)=>{
    res.redirect('/blog')
})

// blog router
app.use('/blog', blogRouter)
app.use('/admin', adminRouter)

// this function will be fired when no match found
app.use((req, res)=>{
    res.status(404).render('404', { title: '404 NOT FOUND' })
})