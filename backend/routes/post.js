const express   = require('express');
const controller = require('../controllers').post;

const router = express.Router();

router.post('/create', controller.createPost)
// router.get('/', controller.test)
// router.put('/update', controller.test)
// router.delete('/delete', controller.test)

module.exports = router;