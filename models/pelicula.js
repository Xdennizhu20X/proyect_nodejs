const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['accion', 'comedia', 'romance'],
    required: true
  },
  raza: String
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
