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

// const getRecipeByID = async (id) => {
//   const db = await connection();
//   const recipe = await db.collection('recipes').findOne(ObjectId(id));
//   return recipe;
// };

// const editRecipe = async ({ id, name, ingredients, preparation, userId }) => {
//   const db = await connection();
//   await db.collection('recipes')
//     .updateOne({ _id: ObjectId(id) }, { $set: { name, ingredients, preparation } });
//   return { _id: id, name, ingredients, preparation, userId };
// };

module.exports = { createTask };