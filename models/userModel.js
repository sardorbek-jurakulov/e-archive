const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Department = require('../models/userModel');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Имя пользователя требуется!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Фамилия пользователя требуется!'],
    trim: true,
  },
  middleName: {
    type: String,
    required: [true, 'Отечество пользователя требуется!'],
    trim: true,
  },
  personnelNumber: {
    type: Number,
    required: [true, 'Необходимо ввести табельный номер пользователя!'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Необходимо ввести пароль пользователя!'],
    trim: true,
  },
  passwordConfirm: {
    type: String, 
    required: [true, 'Пожалуйста, подтвердите пароль!'],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Пароли не совпадают!',
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'super-admin'],
    default: 'user',
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: [true, 'Пользователь должен принадлежать к отделу!'],
  },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'department',
    select: 'name',
  });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;