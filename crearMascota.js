const mongoose = require('./db'); // Importa la instancia de la conexión a la base de datos
const Pet = require('./models/mascotas'); // Importa el modelo de mascotas

// Crear las nuevas mascotas
const nuevaMascota1 = new Pet({
  nombre: 'Luna',
  edad: 2,
  tipo: 'gato',
  raza: 'Persa'
});

const nuevaMascota2 = new Pet({
  nombre: 'Max',
  edad: 4,
  tipo: 'perro',
  raza: 'Labrador'
});

// Guardar las nuevas mascotas en la base de datos
Promise.all([
  nuevaMascota1.save(),
  nuevaMascota2.save()
])
.then(() => console.log('¡Mascotas guardadas correctamente!'))
.catch((error) => console.error('Error al guardar las mascotas:', error));
