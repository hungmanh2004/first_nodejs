const express = require('express');
const router = express.Router();

const othersController = require('../app/controllers/OthersController');

router.use('/', othersController.search);

module.exports = router;
