const User = require('../models/user');
const UserService = require('../services/user.service');

class UserController{
    static async sendToken(req, res){
        const token = UserService.signToken(req.user);
        res.status(200).json({ token });
    }

    static signOut(req, res){
        res.status(200).json({ success: true })
    }
}

module.exports = UserController;