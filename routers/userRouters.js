
const express  = require('express');
const router = express.Router();
const {getallUsers,createNewUser,findUserByRole,deleteUserByID,updateUserById,updateAllUsersByRole} = require('../controllers/userController');

router.get('/users', getallUsers);
router.post('/users',createNewUser);
router.post('/users/role',findUserByRole);
router.delete('/deleteUSer/:id',deleteUserByID);
router.put('/updateUser/:id',updateUserById);
router.put('/userRoles',updateAllUsersByRole);


module.exports = router;