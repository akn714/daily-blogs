const express = require('express')
const { login, post_login, logout } = require('../controllers/admin.controller');
const { adminPermissions } = require('../controllers/permission.controller');

const adminRouter = express.Router();

adminRouter.get('/', (req, res)=>{
    res.redirect('/admin/login')
})
adminRouter.get('/login', login)
adminRouter.post('/login', post_login)
adminRouter.get('/logout', adminPermissions, logout);

module.exports = adminRouter