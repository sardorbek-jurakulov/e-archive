const Document = require('../models/documentModel');

exports.getAllDocuments = async (req, res, next) => {
  const allDocuments = await Document.find();
  res.status(200).json({
    status: 'success',
    data: {
      allDocuments,
    },
  });

};

exports.getOneDocument = async (req, res, next) => {
  const requestedDocument = await Document.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      requestedDocument,
    },
  });
};

exports.createDocument = async (req, res, next) => {
  const newDocument = await Document.create({
    number: req.body.number,
    docType: req.body.docType,
    title: req.body.title,
    department: req.body.departmentId,
  });

  res.status(201).json({
    status: 'status',
    data: {
      newDocument,
    },
  });
};

exports.updateDocument = async (req, res, next) => {

};

exports.deleteDocument = async (req, res, next) => {

};