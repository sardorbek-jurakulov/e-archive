exports.getEntryPoint = (req, res, next) => {
  res.status(200).render('index', {
    message: 'Welcome to e-archive',
    data: 'LLC UAT'
  });
};