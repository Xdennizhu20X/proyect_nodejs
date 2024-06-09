const mongoose = require('./db'); // Importa la instancia de la conexión a la base de datos
const Pelicula = require('./models/pelicula'); // Importa el modelo de películas

// Crear las nuevas películas
const nuevaPelicula1 = new Pelicula({
  nombre: 'The Avengers',
  genero: 'Acción',
  tipo: 'accion'
});

const nuevaPelicula2 = new Pelicula({
  nombre: 'La La Land',
  genero: 'Musical',
  tipo: 'romance'
});

// Guardar las nuevas películas en la base de datos
Promise.all([
  nuevaPelicula1.save(),
  nuevaPelicula2.save()
])
.then(() => console.log('¡Películas guardadas correctamente!'))
.catch((error) => console.error('Error al guardar las películas:', error));
