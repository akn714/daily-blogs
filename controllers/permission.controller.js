const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const JWT_KEY = process.env.sk;

function isAdmin(id){
    return id==process.env.id
}
module.exports.isAdmin = isAdmin

module.exports.protectRouter = function protectRouter(req, res, next){
    const sk = null;    // getting this sk from request headers sent by bot
    sk = process.env.sk;
    if(sk==process.env.sk){
        next();
    }
    else{
        return res.json({
            message: 'Authentication failed | Not Permitted'
        })
    }
}

module.exports.adminPermissions = function adminPermissions(req, res, next){
    try {
        let token = req.cookies.tkn;
        if(!token){
            return res.redirect('/blog');
        }
        let payload = jwt.verify(token, JWT_KEY);
        if(isAdmin(payload.payload)){
            next();
        }
        else{
            return res.status(401).json({
                message: 'Not allowed'
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}


