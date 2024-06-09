const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    enum: ['perro', 'gato', 'otro'],
    required: true
  },
  raza: String
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
