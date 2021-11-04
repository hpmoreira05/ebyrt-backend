// const { ObjectId } = require('mongodb');
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

// const editRecipe = async ({ id, name, ingredients, preparation, userId }) => {
//   const db = await connection();
//   await db.collection('recipes')
//     .updateOne({ _id: ObjectId(id) }, { $set: { name, ingredients, preparation } });
//   return { _id: id, name, ingredients, preparation, userId };
// };

module.exports = { createTask, getTaskByUserID };