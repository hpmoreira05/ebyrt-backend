const db = require('./connection');

const createUser = async ({ email, password, name }) => {
  const inserted = await db.collection('users').insertOne({ name, email, password });
  return { user: { name, email, _id: inserted.insertedId } };
};

const getEmail = async (email) => {
  const emailVerify = await db.collection('users').findOne({ email });
  return emailVerify;
};

module.exports = { createUser, getEmail };