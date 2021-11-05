const { ObjectId } = require('mongodb');
const db = require('./connection');

const createTask = async ({ description, userId }) => {
  const inserted = await db.collection('tasks')
    .insertOne({ 
      description,
      status: 'Pendente',
      createdAt: new Date().toLocaleString('pt-br'),
      userId,
    });
  return { Task: { description, userId, _id: inserted.insertedId } };
};

// const getRecipes = async () => {
//   const db = await connection();
//   const recipes = await db.collection('recipes').find().toArray();
//   return recipes;
// };

const getTaskByUserID = async (_id) => {
  const recipe = await db.collection('tasks').find({ userId: _id }).toArray();
  return recipe;
};

const editTask = async ({ id, status }) => {
  const teste = await db.collection('tasks')
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { status } });
  return teste.value;
};

const deleteTask = async (id) => {
  const exists = await db.collection('tasks').findOne(ObjectId(id));
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return exists;
};

module.exports = { createTask, getTaskByUserID, editTask, deleteTask };