const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const url = require('url');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false,
  });

  user.password = undefined;

  // res.status(statusCode).json({
  //   status: 'success',
  //   token,
  //   data: {
  //     user,
  //   },
  // });
  const redirectPath = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
  res.redirect(redirectPath);
};

exports.login = async (req, res, next) => {
  const personnelNumber = req.body.personnelNumber;
  const password = req.body.password;

  // TODO: foydalanuvchidan kelayotgan personnelNumber va passwordlarni bo'shligini tekshirish

  const user = await User.findOne({ personnelNumber }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.render('login');
  }

  createSendToken(user, 200, req, res);
};

exports.protect = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  const redirectPath = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    // pathname: req.originalUrl
  }) + '/users/login';
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer', 0)) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  
  if(!token) {
    // res.redirect('login');
    res.redirect(redirectPath);
    return next();
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    // res.render('login');
    res.redirect(redirectPath);
    return next();
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    res.redirect(redirectPath);
    return next();
  }
  
  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
};