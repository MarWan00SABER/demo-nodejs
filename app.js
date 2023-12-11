const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définir le dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Gérer la route pour index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Gérer la route pour about.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
