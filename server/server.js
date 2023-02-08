const express = require('express');
const app = express();
require('dotenv').config();
const {dbConnection} = require('./config');
const db = require('./data');
const cors = require('cors');
app.use(cors());
app.use(express.json())

dbConnection();

// Routes
app.use('/users', require('./routes/user'));
app.use('/customers', require('./routes/customer'));
app.use('/login', require('./routes/auth'));

app.get('/credits', (req, res) => {
  res.json(db.getCredits);
});

app.get('/payments', (req, res) => {
  res.json(db.getPayments);
});

app.listen(process.env.PORT, () => {
  console.log('Server on port ', process.env.PORT);
});

