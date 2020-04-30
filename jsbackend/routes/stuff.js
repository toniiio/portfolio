const express = require('express');
const router = express.Router();
const stuffCtrl = require ('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/',auth,multer,stuffCtrl.createThing ); // pas de parenthese car on aplique la fonction
router.put('/:id',auth,multer,stuffCtrl.modifyThing);
router.delete('/:id',auth,stuffCtrl.deleteThing );
router.get('/:id',auth,stuffCtrl.getOneThing);
router.get('/',auth,stuffCtrl.getAllThing);

module.exports = router;