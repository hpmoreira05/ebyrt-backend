const Task = require('../services/tasksService');

const createTask = async (req, res) => {
  try {
    const { description } = req.body;
    const { _id } = req.user;
    const data = await Task.createTask({ description, userId: _id });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao cadastrar a tarefa' });
  }
};

// const getRecipes = async (req, res) => {
//   try {
//     const data = await Recipe.getRecipes();
//      return res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Aconteceu erro ao buscar receitas' });
//   }
// };

// const getRecipeByID = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await Recipe.getRecipeByID(id);
//     if (data.err) {
//       return res.status(data.err.code).json(data.err.message); 
//     }
//      return res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Aconteceu erro ao buscar receita' });
//   }
// };

// const editRecipe = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { _id } = req.user;
//     const { name, ingredients, preparation } = req.body;
//     const data = await Recipe.editRecipe({ id, userId: _id, name, ingredients, preparation });
//     if (data.err) {
//       return res.status(data.err.code).json(data.err.message); 
//     }
//      return res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Aconteceu erro ao buscar receita' });
//   }
// };

module.exports = { createTask };