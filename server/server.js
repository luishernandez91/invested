require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./config');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

dbConnection();

// Routes
app.use('/users', require('./routes/user'));
app.use('/customers', require('./routes/customer'));
app.use('/credits', require('./routes/credit'));
app.use('/payments', require('./routes/payment'));
app.use('/login', require('./routes/auth'));


app.listen(process.env.PORT, () => {
  console.log('Server on port ', process.env.PORT);
});

