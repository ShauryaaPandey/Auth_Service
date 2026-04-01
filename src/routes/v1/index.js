const express = require('express');

const userController = require('../../controllers/user-controller');

const {AuthreqValidators} = require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup' ,
    AuthreqValidators.validateUsersAuth,
     userController.create);
router.post(
    '/signin',
    AuthreqValidators.validateUsersAuth,
    userController.signIn);

module.exports = router;