exports.getWelcome = (req, res, next) => {
  res.status(200).render('welcome', {
    message: 'Welcome to e-archive',
    data: 'LLC UAT'
  });
};