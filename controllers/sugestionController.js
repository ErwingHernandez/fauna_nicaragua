
const Suggestion = require('../models/SugestionFauna.js');


const getSuggestions = async (req, res) => {

    try {
        // Obtener todas las sugerencias de la base de datos
        const suggestions = await Suggestion.find({});
    
        // Verificar si hay sugerencias
        if (!suggestions || suggestions.length === 0) {
          return res.status(404).json({ message: "No se encontraron sugerencias." });
        }
    
        // Devolver todas las sugerencias
        res.status(200).json(suggestions);
      } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: error.message });
      }
    
}

const sendSuggestion = async (req, res) => {

    try {
        const suggestion = await Suggestion.create(req.body);

        res.status(201).send(suggestion);

    } catch (error) {

        console.error(error);
        res.status(500).send("Error al guardar la sugerencia.");
    }
}



module.exports = {
    sendSuggestion,
    getSuggestions
}