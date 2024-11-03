require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');
const cors = require('cors');



const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
// Connexion à MongoDB
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(error => console.error('Erreur de connexion à MongoDB:', error));

// Middleware
app.use(express.json());

// Routes (sans préfixe)
app.use(commentRoutes); // Maintenant, les routes de commentaires sont directement accessibles

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
