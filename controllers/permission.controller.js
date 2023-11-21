module.exports.protectRouter = function protectRouter(req, res, next){
    const sk = null;    // getting this sk from request headers sent by bot
    if(sk==process.env.sk){
        next();
    }
    else{
        res.json({
            message: 'Authentication failed | Not Permitted'
        })
    }
    res.json({
        message: 'protected'
    })
}

module.exports.adminPermissions = function adminPermissions(req, res, next){
    if(req.cookies.sk==process.env.ADMIN_SK){
        next();
    }
    else{
        res.status(401).json({
            message: 'Not Allowed'
        })
    }
}


