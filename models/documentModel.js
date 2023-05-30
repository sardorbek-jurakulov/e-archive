const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  number: {
    type: String,
    required: [true, 'Необходимо ввести номер документа'],
    trim: true,
  },
  // TODO: docType qiymatlarini enumda berish, default qiymat berish
  docType: {
    type: String,
    required: [true, 'Необходимо ввести тип документа'],
  }
});