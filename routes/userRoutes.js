const router = require('express').Router();
const jwtValidate = require('../middlewares/validateJWT');
const { registerUser, getUser, getUserName } = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', getUser);
router.get('/', jwtValidate, getUserName);

module.exports = router;
