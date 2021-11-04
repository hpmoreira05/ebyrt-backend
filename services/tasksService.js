const { ObjectId } = require('mongodb');
const Task = require('../models/tasksModel');

const createTask = async ({ description, userId }) => {
  if (!description) {
    return { err: { code: 400, message: { message: 'Invalid entries. Try again.' } } };
  }
  const task = await Task.createTask({ description, userId });
  return task;
};

// const getRecipes = async () => {
//   const recipes = await Recipe.getRecipes();
//   return recipes;
// };

const getTaskByUserID = async (_id) => {
  if (!ObjectId.isValid(_id)) {
    return { err: { code: 404, message: { message: 'recipe not found' } } };
  }
  const tasks = await Task.getTaskByUserID(_id);
  // if (!recipe) return { err: { code: 404, message: { message: 'recipe not found' } } };
  return tasks;
};

// const editRecipe = async ({ id, name, ingredients, preparation, userId }) => {
//   const editedRecipe = await Recipe.editRecipe({ id, name, ingredients, preparation, userId });
//   return editedRecipe;
// };

module.exports = { createTask, getTaskByUserID };
