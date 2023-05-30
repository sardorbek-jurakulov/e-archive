const User = require('../models/userModel');


exports.getAllUsers = async (req, res, next) => {
  const allUsers = await User.find();
  res.status(200).json({
    status: 'success',
    data: {
      allUsers,
    },
  });
};

exports.getOneUser = async (req, res, next) => {
  const requestedDocuemntId = req.body.id;
  const user = await User.findById(requestedDocuemntId);
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};

exports.createUser = async (req, res, next) => {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    personnelNumber: req.body.personnelNumber,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
    department: req.body.departmentId,
  });

  res.status(201).json({
    status: "success",
    data: {
      newUser,
    },
  });
};

exports.updateUser = async (req, res, next) => {

};

exports.deleteUser = async (req, res, next) => {

};