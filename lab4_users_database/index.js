// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb+srv://admin:adminpassword@labexercise4.g7qxjaf.mongodb.net/?retryWrites=true&w=majority', {

}).then(() => {
   console.log('Connected to MongoDB');
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
}).catch(err => console.error('Error connecting to MongoDB:', err));
