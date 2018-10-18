const controller = require('../controllers');
const router = require('express').Router();

router.get('/', controller.movieAPI.get);

module.exports = router;
