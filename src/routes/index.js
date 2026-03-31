const express = require('express');
const router = express.Router();
const apiV1routes = require('./v1/index');

router.use('/v1',apiV1routes);

module.exports = router;