const router = require('express').Router();
const departmentController = require('../controllers/departmentController');

router
  .route('/')
  .get(departmentController.getAllDepartments)
  .post(departmentController.createDepartment);

module.exports = router;