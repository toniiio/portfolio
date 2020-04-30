const multer = require('multer');

const MIME_TYPES = { // image qu'on peut avoir du frontend
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({ // image qu'on peut avoir du frontend
  destination: (req, file, callback) => {
    callback(null, 'images'); // null = pas derreur images = dossier
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_'); //elimine probleme espace serve
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');