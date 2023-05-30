const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A department must have a name'],
    unique: true,
    trim: true,
    maxlength: [100, 'A department name must have less or equal then 100 characters'],
    minlength: [2, 'A department name must have more or equal then 1 character'],
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;