const path = require('path');
const express = require('express');
const url = require('url');

const viewRoutes = require('./routes/viewRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

const app = express();
app.use(express.json());

app.use(
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/'))
);
app.use(
  express.static(path.join(__dirname, 'public'))
);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use('/', viewRoutes);
app.use('/departments', departmentRoutes);
app.use('/users', userRoutes);
app.use('/documents', documentRoutes);
app.all('*', (req, res, next) => {
  const appealedAddress = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
  res.status(404).render('errorPage', {
    message: `Указанный адрес "${appealedAddress}" не существует`,
  });
});
module.exports = app;