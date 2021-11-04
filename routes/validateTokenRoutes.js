const router = require('express').Router();
const jwtValidate = require('../middlewares/validateJWT');
const { validateToken } = require('../controllers/validateTokenController');

router.get('/', jwtValidate, validateToken);

module.exports = router;
