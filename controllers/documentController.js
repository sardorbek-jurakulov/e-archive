const Document = require('../models/documentModel');

exports.getAllDocuments = async (req, res, next) => {
  // TODO request qilayotgan userni rolini ko'rish kerak agar uni roli admin, yoki user bo'lmasa unga bu sahifani ochib bermaslik kerak, javobga sizda bu page'ga access yo'q deb errorPage'ni ochib berish kerak.
  const documents = await Document.find();
  res.render('mainContentHolder', {
    // roleOfVisitor: req.user.role || 'user',
    roleOfVisitor: 'user',
    sendingInfoAbout: 'documents',
    documents,
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