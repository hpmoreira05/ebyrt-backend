// const { ObjectId } = require('mongodb');
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

// const getRecipeByID = async (id) => {
//   if (!ObjectId.isValid(id)) {
//     return { err: { code: 404, message: { message: 'recipe not found' } } };
//   }
//   const recipe = await Recipe.getRecipeByID(id);
//   if (!recipe) return { err: { code: 404, message: { message: 'recipe not found' } } };
//   return recipe;
// };

// const editRecipe = async ({ id, name, ingredients, preparation, userId }) => {
//   const editedRecipe = await Recipe.editRecipe({ id, name, ingredients, preparation, userId });
//   return editedRecipe;
// };

module.exports = { createTask };
