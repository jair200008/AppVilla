const {Router} = require('express');
const router = Router();

const {getUsers, createUser, deleteUser, getUser, updateUser} = require('../controllers/users.controller')
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)
    .get(getUser)
    .put(updateUser)
module.exports = router;