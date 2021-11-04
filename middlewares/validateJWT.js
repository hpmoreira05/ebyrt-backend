const jwt = require('jsonwebtoken');
const model = require('../models/userModel');

const secret = 'Ebyrttoken123456';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ err: { code: 400, message: { message: 'Missing auth token' } } });
  }
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    const user = await model.getEmail(decoded.data.email);
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ err: { code: 400, message: { message: 'JWT malformed' } } });
    }
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ err: { code: 400, message: { message: 'JWT malformed' } } });
  }
};