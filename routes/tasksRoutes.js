const router = require('express').Router();
const jwtValidate = require('../middlewares/validateJWT');
const { createTask, getTaskByUserID,
   editTask, deleteTask } = require('../controllers/tasksController');

router.post('/', jwtValidate, createTask);
router.get('/', jwtValidate, getTaskByUserID);
router.put('/:id', jwtValidate, editTask);
router.delete('/:id', jwtValidate, deleteTask);

module.exports = router;