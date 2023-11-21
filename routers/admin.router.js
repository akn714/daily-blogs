const express = require('express')
const { login, post_login } = require('../controllers/admin.controller')

const adminRouter = express.Router();

adminRouter.get('/login', login)
adminRouter.post('/login', post_login)

module.exports = adminRouter