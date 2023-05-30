const path = require('path');
const express = require('express');

const viewRoutes = require('./routes/viewRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

const app = express();
app.use(express.json());

app.use(
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))
);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use('/', viewRoutes);
app.use('/departments', departmentRoutes);
app.use('/users', userRoutes);
app.use('/documents', documentRoutes);

module.exports = app;