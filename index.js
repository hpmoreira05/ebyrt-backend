const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const validateTokenRoutes = require('./routes/validateTokenRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/validateToken', validateTokenRoutes);

const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});