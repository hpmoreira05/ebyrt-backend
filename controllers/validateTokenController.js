const validateToken = (req, res) => {
  console.log('entrei aqui');
  return res.status(201).json({ message: 'Authorized' });
};

module.exports = { validateToken };