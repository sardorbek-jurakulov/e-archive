const Department = require('../models/departmentModel');
const User = require('../models/userModel');
const orgDocument = require('../models/documentModel');
const url = require('url');

exports.redirectController = async (req, res, next) => {
  // const documents = await orgDocument.find();
  // res.status(200).render('allDocuments', {
  //   documents,
  // });
  const roleOfVisitor = 'admin'
  let redirectPath = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
  if (roleOfVisitor === 'user' || roleOfVisitor === 'admin') {
    redirectPath += 'documents';
  } else if (roleOfVisitor === 'super-admin') {
    redirectPath += 'users';
  }
  res.redirect(redirectPath);
  res.end();
};