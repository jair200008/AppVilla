const userCtrl = {};
const Users = require('../models/Users');

// CRUD MONGO CONSULTAR PARA CREAR USUARIOS 

userCtrl.getUsers = async(req, res) => {   
    const user = await Users.find();
    res.json(user)
}

userCtrl.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.json(user)
}

userCtrl.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new Users({
        name,
        email,
        password
    });
    await newUser.save();
    res.json({message: 'User saved'})
}

userCtrl.updateUser = async (req, res) => {
    const {name, email, password} = req.body;
    await Users.findByIdAndUpdate(req.params.id, {
        name,
        email,
        password
    })
    res.json({message: "User Update"})
}

userCtrl.deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'})
}

module.exports = userCtrl