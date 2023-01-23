
// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

// Couleur dans la console
const colors = require('colors')

// Connexion à MongoDB
const connectDB = require('./config/db')
connectDB()

// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
//app.get('/api/goals', (req, res) => {res.send('Get goals')})
app.use('/api/pokemons', require('./routes/pokemonRoutes'))
app.use('/api/types', require('./routes/typeRoutes'))
app.use('/api/competences', require('./routes/competenceRoutes'))

// Lancement du serveur
app.listen(port, () => {console.log(`Server started on ${port}`)})

