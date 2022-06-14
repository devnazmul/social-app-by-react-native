const router = require('express').Router();
const controller = require('../controllers').user;



router.post('/create',controller.createUser);
router.post('/login',controller.loginUser);
router.put('/update/:email',controller.updateUser);
router.delete('/delete/:email',controller.deleteUser);


module.exports = router;