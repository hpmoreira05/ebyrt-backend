const router = require('express').Router();
const jwtValidate = require('../middlewares/validateJWT');
const { createTask, getTaskByUserID, editTask } = require('../controllers/tasksController');

router.post('/', jwtValidate, createTask);
router.get('/', jwtValidate, getTaskByUserID);
router.put('/:id', jwtValidate, editTask);

module.exports = router;