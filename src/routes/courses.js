const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.use('/create', courseController.create);
router.post('/store', courseController.store);
router.use('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);

module.exports = router;
