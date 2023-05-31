const Department = require('../models/departmentModel');
const User = require('../models/userModel');
const Document = require('../models/documentModel');

exports.getEntryPoint = (req, res, next) => {
  res.status(200).render('index', {
    message: 'Welcome to e-archive',
    data: 'LLC UAT'
  });
};