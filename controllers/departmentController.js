const Department = require('../models/departmentModel');

exports.getAllDepartments = async (req, res, next) => {
  const allDepartments = await Department.find();

  res.status(200).json({
    status: 'success',
    data: {
      allDepartments,
    },
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