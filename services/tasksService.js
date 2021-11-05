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
    return { err: { code: 404, message: { message: 'User not found' } } };
  }
  const tasks = await Task.getTaskByUserID(_id);
  // if (!recipe) return { err: { code: 404, message: { message: 'recipe not found' } } };
  return tasks;
};

const editTask = async ({ id, status }) => {
  if (!ObjectId.isValid(id)) {
    return { err: { code: 404, message: { message: 'Task not found' } } };
  }
  if (!status) return { err: { code: 400, message: { message: 'Invalid entries. Try again.' } } };
  const editedTask = await Task.editTask({ id, status });
  if (!editedTask) return { err: { code: 404, message: { message: 'Task not found' } } };
  return editedTask;
};

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) return { err: { code: 404, message: { message: 'Task not found' } } };
  const data = await Task.deleteTask(id);
  if (!data) return { err: { code: 404, message: { message: 'Task not found' } } };
  return data;
};

module.exports = { createTask, getTaskByUserID, editTask, deleteTask };
