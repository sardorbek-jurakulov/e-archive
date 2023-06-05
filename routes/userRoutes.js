const router = require('express').Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router
  .route('/login')
  .get((req, res, next) => {
    res.render('login');
  })
  .post(authController.login);

router.use(authController.protect);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;