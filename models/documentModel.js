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
    trim: ture,
  },
  title: {
    type: String,
    required: [true, 'Заголовок документа должно быть введено'],
    trim: true,
  },
  // TODO: hujjat faylini ham biriktirish kerak, minifikatsiya qilib.
  // file: {
  //   type: String,
  // },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: [true, 'Документ должен принадлежать к отделу!'],
  }
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'department',
    select: 'name',
  });
  next();
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;