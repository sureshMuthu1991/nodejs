var jwt = require('jsonwebtoken');

module.exports.authenticate = function(req, res){
    var user = {
        username: 'test',
        email: 'sura@sura.com'
    }
    var token= jwt.sign(user, process.env.SECURET_KEY, {
        expiresIn: 4000
    });
    res.json({
        success: true,
        token: token
    });
}