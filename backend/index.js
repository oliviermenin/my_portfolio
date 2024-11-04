require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;

const allowedOrigins = [
  'https://my-portfolio-ew2y.onrender.com',
  'https://my-portfolio-k0na.onrender.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(error => console.error('Erreur de connexion à MongoDB:', error));

app.use(express.json());
app.use(commentRoutes);

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});