const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Отдел должен иметь название'],
    unique: true,
    trim: true,
    maxlength: [100, 'Название отдела должно содержать меньше или равно 100 символов.'],
    minlength: [2, 'Название отдела должно состоять не менее чем из 1 символа.'],
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;