const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const JWT_KEY = process.env.sk;

module.exports.login = function login(req, res){
    if(req.cookies.tkn){
        return res.json({
            message: 'Admin already logged in'
        })
    }
    res.render('login', { title: 'Admin | Login', isAdmin: false });
}

module.exports.post_login = function post_login(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const admin_name = process.env.ADMIN_NAME;
    const admin_password = process.env.ADMIN_PASSWORD;
    if(username==admin_name){
        if(password==admin_password){
            let uid = process.env.id;
            let token = jwt.sign({ payload: uid }, JWT_KEY);
            // tkn -> token
            res.cookie('tkn', token, { maxAge: 60 * 60 * 1000, secure: true, httpOnly: true });

            res.json({
                message: 'Admin Logged in'
            })
        }
        else{
            res.status(401).json({
                message: 'Invalid Credentials'
            })
        }
    }
    else{
        res.status(401).json({
            message: 'Admin not found'
        })
    }
}

module.exports.logout = function logout(req, res){
    if(req.cookies.tkn){
        res.cookie('tkn', '', { expires: new Date(0), httpOnly: true, secure: true })
        res.json({
            message: 'Admin logged out'
        })
    }
    else{
        res.redirect('/');
    }
}

