const router = require('express').Router();
const departmentController = require('../controllers/departmentController');
const authController = require('../controllers/authController');

// router.use(authController.protect);

router
  .route('/')
  .get(departmentController.getAllDepartments)
  .post(departmentController.createDepartment);

module.exports = router;