const router = require('express').Router();
const jwtValidate = require('../middlewares/validateJWT');
const { createTask } = require('../controllers/tasksController');

router.post('/', jwtValidate, createTask);

module.exports = router;