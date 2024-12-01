const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    suggestion: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date,
         default: Date.now 
        },
});

const Suggestion = mongoose.model("Sugerencias", suggestionSchema);

module.exports = Suggestion;
