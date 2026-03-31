const express = require('express');

const userRouter = require('../../controllers/user-controller');

const router = express.Router();

router.post('/signup' , userRouter.create);

module.exports = router;