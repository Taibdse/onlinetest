const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/keys');

class UserService{
    static signToken(user){
        const payload = {
            user: {
                id: user.id,
                username: user.local.username,
                method: user.method
            }
        }
        const options = {
            expiresIn: '1h'
        }
        const token = jwt.sign(payload, JWT_SECRET_KEY, options);
        return token;
    }
}

module.exports = UserService;