const router = require('express').Router();
const { registerUser, getUser } = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', getUser);

module.exports = router;
