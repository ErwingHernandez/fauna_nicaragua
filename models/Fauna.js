const mongoose = require('mongoose');

const FaunaSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  nombreCientifico: {
    type: String
  },
  descripcion: {
    type: String,

  },
  habitat: {
    type: String,

  },
  ubicacion: {
    type: String,

  },
  imagen: {
    type: String,
  },
})

const Fauna = mongoose.model("Fauna", FaunaSchema);

module.exports = Fauna;


