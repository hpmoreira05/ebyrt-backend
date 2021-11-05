const User = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const data = await User.registerUser({ email, password, name });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao cadastrar usuário' });
  }
};

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await User.getUser({ email, password });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao efetuar login' });
  }
};

const getUserName = async (req, res) => {
  try {
    const { _id } = req.user;
    const data = await User.getUserName(_id);
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao buscar usuario' });
  }
};

module.exports = { registerUser, getUser, getUserName };