const router = require('express').Router();
const jwtValidate = require('../middlewares/validateJWT');
const { createTask, getTaskByUserID } = require('../controllers/tasksController');

router.post('/', jwtValidate, createTask);
router.get('/', jwtValidate, getTaskByUserID);

module.exports = router;