const router = require('express').Router();
const documentController = require('../controllers/documentController');

router
  .route('/')
  .get(documentController.getAllDocuments)
  .post(documentController.createDocument);

router
  .route('/:id')
  .get(documentController.getOneDocument)
  .patch(documentController.updateDocument)
  .delete(documentController.deleteDocument);

module.exports = router;