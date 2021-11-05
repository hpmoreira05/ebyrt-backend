const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const User = require('../models/userModel');

const secret = 'Ebyrttoken123456';

const verifyUserEmail = async (email) => {
  const validEmail = /\S+@\S+\.\S+/;
  if (!email) return { err: { code: 400, message: { message: 'Invalid entries. Try again.' } } };
  if (!validEmail.test(email)) {
    return { err: { code: 400, message: { message: 'Invalid entries. Try again.' } } };
  }
};

const registerUser = async ({ email, password, name }) => {
  if (!name) return { err: { code: 400, message: { message: 'Invalid entries. Try again.' } } };
  if (await verifyUserEmail(email)) return verifyUserEmail(email);
  if (!password) return { err: { code: 400, message: { message: 'Invalid entries. Try again.' } } };
  const emailVerify = await User.getEmail(email);
  if (emailVerify) return { err: { code: 409, message: { message: 'Email already registered' } } };
  const registeredUser = await User.createUser({ email, password, name });
  return registeredUser;
};

const getUser = async ({ email, password }) => {
  if (!email || !password) {
    return { err: { code: 401, message: { message: 'All fields must be filled' } } };
  }
  const user = await User.getEmail(email);
  if (!user || user.password !== password) {
    return { err: { code: 401, message: { message: 'Incorrect username or password' } } };
  }
  
  const jwtConfig = {
    expiresIn: '8h',
    algorithm: 'HS256',
  };
  const { _id } = user;
  const userId = ObjectId(_id).toString();
  const userInfoToken = { userId, email };
  const token = jwt.sign({ data: userInfoToken }, secret, jwtConfig);
  return { token };
};

const getUserName = async (_id) => {
  const user = await User.getUserName(_id);
  return user;
};

module.exports = { registerUser, getUser, getUserName };