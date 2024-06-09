const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/deber'; // Replace with your actual connection string

mongoose.connect(url); // Remove the options object

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', function() {
  console.log('Conectado a la base de datos');
});

module.exports = db;