const db = require('./connection');

const createUser = async ({ email, password, name }) => {
  const inserted = await db.collection('users').insertOne({ name, email, password });
  return { user: { name, email, _id: inserted.insertedId } };
};

const getEmail = async (email) => {
  const emailVerify = await db.collection('users').findOne({ email });
  return emailVerify;
};

const getUserName = async (_id) => {
  const userName = await db.collection('users').findOne(_id);
  return userName.name;
};

module.exports = { createUser, getEmail, getUserName };