module.exports.login = function login(req, res){
    res.render('login', { title: 'Admin | Login' });
}

module.exports.post_login = function post_login(req, res){
    const username = req.body.username;
    const password = req.body.password;
    if(username==process.env.ADMIN_NAME){
        if(password==process.env.ADMIN_PASSWORD){
            // implement jwt
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

