const Task = require('../services/tasksService');

const createTask = async (req, res) => {
  try {
    const { description } = req.body;
    const { _id, name } = req.user;
    const data = await Task.createTask({ description, userId: _id, name });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao cadastrar a tarefa' });
  }
};

const getTaskByUserID = async (req, res) => {
  try {
    const { _id } = req.user;
    const data = await Task.getTaskByUserID(_id);
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao buscar tasks' });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Task.editTask({ id, status });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao editar task' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Task.deleteTask(id);
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao deletar task' });
  }
};

module.exports = { createTask, getTaskByUserID, editTask, deleteTask };
