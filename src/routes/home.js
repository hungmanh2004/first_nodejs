const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.use('/:slug', homeController.show);
router.use('/', homeController.index); // ở dưới cùng vì đọc từ trên xuống, ko khớp cái nào mới vào cái này

module.exports = router;