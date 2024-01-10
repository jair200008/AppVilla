const userCtrl = {};
const Users = require('../models/Users');

userCtrl.getUsers = async(req, res) => {   
    const user = await Users.find();
    res.json(user)
}

userCtrl.createUser = (req, res) => {
    console.log(req.body);
    res.json({message: 'User saved'})
}

userCtrl.deleteUser = (req, res) => res.json({message: []})


module.exports = userCtrl