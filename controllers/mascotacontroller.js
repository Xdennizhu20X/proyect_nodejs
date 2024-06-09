const Pet = require('../models/mascotas');

// Controladores para las operaciones CRUD de mascotas

// Crear una nueva mascota
exports.createPet = (req, res) => {
  const nuevaMascota = new Pet(req.body);
  nuevaMascota.save((err, mascotaGuardada) => {
    if (err) return res.status(500).send(err);
    return res.status(201).json(mascotaGuardada);
  });
};

// Obtener todas las mascotas
exports.getAllPets = (req, res) => {
  Pet.find({}, (err, mascotas) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(mascotas);
  });
};

// Obtener una mascota por su ID
exports.getPetById = (req, res) => {
  Pet.findById(req.params.petId, (err, mascota) => {
    if (err) return res.status(500).send(err);
    if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });
    return res.status(200).json(mascota);
  });
};

// Actualizar una mascota por su ID
exports.updatePetById = (req, res) => {
  Pet.findByIdAndUpdate(req.params.petId, req.body, { new: true }, (err, mascotaActualizada) => {
    if (err) return res.status(500).send(err);
    if (!mascotaActualizada) return res.status(404).json({ message: 'Mascota no encontrada' });
    return res.status(200).json(mascotaActualizada);
  });
};

// Eliminar una mascota por su ID
exports.deletePetById = (req, res) => {
  Pet.findByIdAndDelete(req.params.petId, (err, mascotaEliminada) => {
    if (err) return res.status(500).send(err);
    if (!mascotaEliminada) return res.status(404).json({ message: 'Mascota no encontrada' });
    return res.status(200).json({ message: 'Mascota eliminada correctamente' });
  });
};
