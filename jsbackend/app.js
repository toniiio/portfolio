const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path'); // donne accès système de fichier

mongoose.connect('mongodb+srv://Patience:yes@cluster0-b4drs.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true 
	})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname,'images'))); // dirname = nom dossier
app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes); // route attendu par le frontend



module.exports = app;