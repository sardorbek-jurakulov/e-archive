const Department = require('../models/departmentModel');

exports.getAllDepartments = async (req, res, next) => {
  const departments = await Department.find();

  res.render('mainContentHolder', {
    roleOfVisitor: req.user.role || 'user',
    sendingInfoAbout: 'departments',
    departments,
  });
};

exports.getOneDepartment = async (req, res, next) => {

};

exports.createDepartment = async (req, res, next) => {
  const newDepartment = await Department.create({
    name: req.body.name,
  });

  res.status(201).json({
    status: 'success',
    data: {
      newDepartment,
    }
  });
};

exports.updateDepartment = async (req, res, next) => {

};

exports.deleteDepartment = async (req, res, next) => {

};