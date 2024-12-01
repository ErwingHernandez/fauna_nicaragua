const Fauna = require('../models/Fauna')



const getFaunas = async (req, res) => {
  try {
    const fauna = await Fauna.find({});
    res.status(200).json(fauna);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }


};

const getFauna = async (req, res) => {
  try {
    const { id } = req.params;
    const fauna = await Fauna.findById(id);
    res.status(200).json(fauna);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo animal
const createFauna = async (req, res) => {
  try {
    const fauna = await Fauna.create(req.body);
    res.status(200).json(fauna);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Actualizar un animal existente
const updateFauna = async (req, res) => {
  try {
    const { id } = req.params;

    const fauna = await Fauna.findByIdAndUpdate(id, req.body);

    if (!fauna) {
      return res.status(404).json({ message: 'Fauna no encontrada' });
    }

    const updateFauna = await Fauna.findById(id);

    res.status(200).json(updateFauna);

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Eliminar un animal
const deleteFauna = async (req, res) => {
  try {
    const { id } = req.params;
    const fauna = await Fauna.findByIdAndDelete(id);

    if (!fauna) {
      return res.status(404).json({ message: 'Fauna no encontrada' });
    }

    res.status(200).json({ message: "Fauna borrada con exito" })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getFaunas,
  getFauna,
  createFauna,
  updateFauna,  
  deleteFauna,
}