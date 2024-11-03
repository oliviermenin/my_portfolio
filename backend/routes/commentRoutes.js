const { Router } = require('express');
const { addComment, getComments } = require('../src/controllers/commentController.js');

const router = Router();

router.post('/comments', addComment);
router.get('/comments', getComments);

module.exports = router;
