const mongoose = require('./db'); 
const Pelicula = require('./models/pelicula'); 

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


Promise.all([
  nuevaPelicula1.save(),
  nuevaPelicula2.save()
])
.then(() => console.log('¡Películas guardadas correctamente!'))
.catch((error) => console.error('Error al guardar las películas:', error));
