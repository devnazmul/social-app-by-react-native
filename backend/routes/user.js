const router = require('express').Router();
const controller = require('../controllers').user;


router.post('/create',controller.createUser);
router.post('/login',controller.loginUser);
router.get('/single',controller.getSingleUser);
router.put('/update',controller.updateUser);
router.delete('/delete',controller.deleteUser);


module.exports = router;