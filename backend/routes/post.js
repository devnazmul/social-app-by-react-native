const express   = require('express');
const passport = require('passport');
const controller = require('../controllers').post;
require('../middlewares/passport'); 

const router = express.Router();

router.get('/',passport.authenticate('jwt',{session:false}),controller.getPost);
router.post('/create',passport.authenticate('jwt',{session:false}),controller.createPost);
router.post('/add-comment',controller.addComment);
// router.put('/update/:email',controller.updateUser);
// router.delete('/delete/:email',controller.deleteUser);

module.exports = router;