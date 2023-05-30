const path = require('path');
const express = require('express');

const viewRoutes = require('./routes/viewRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

const app = express();
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use('/', viewRoutes);
app.use('/departments', departmentRoutes);

module.exports = app;