const express = require('express');
const router = express.Router();
const authToken = require('../middlewares/Auth');
const userController = require('../controllers/userController')


router.post('/login', (rq, rs) => {

} );

router.get('/all',authToken,  userController.getAllUsers);
router.get('/:id',authToken,  userController.getUserByID);

router.post('/store', authToken, userController.storeUser);
router.post('/update', authToken, userController.updateUser);
router.post('/delete', authToken, userController.destroyUser);

module.exports = router;