const mongoose = require('./db'); 
const Pet = require('./models/mascotas'); 


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


Promise.all([
  nuevaMascota1.save(),
  nuevaMascota2.save()
])
.then(() => console.log('¡Mascotas guardadas correctamente!'))
.catch((error) => console.error('Error al guardar las mascotas:', error));
