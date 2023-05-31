const Department = require('../models/departmentModel');
const User = require('../models/userModel');
const orgDocument = require('../models/documentModel');

exports.getAllDocuments = async (req, res, next) => {
  const documents = await orgDocument.find();
  res.status(200).render('index', {
    documents,
  });
};