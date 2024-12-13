const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index); // ở dưới cùng vì đọc từ trên xuống, ko khớp cái nào mới vào cái này

module.exports = router;
