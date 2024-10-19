const express = require('express');
const mongoose = require('mongoose');
const Fauna = require('./models/Fauna');
const faunaRoutes = require('./routes/FaunaRoutes');
const PORT = 3000 || 4000;


const app = express();

app.use(express.json()); 3
app.use(express.urlencoded({ extended: false }))

// Rutas
app.use('/api/faunas', faunaRoutes);

app.get('/', (req, res) => {
    res.send("Api de Fauna de Nicaragua")
});

// Conectar a la base de datos

mongoose.connect("mongodb+srv://herwing43:Nueve123@backenddb.s7yan.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(PORT, () => {
            console.log(`Server is running on localhost:${PORT}`);
        });
    })



