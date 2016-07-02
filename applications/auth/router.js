const Authentication = require('./authentication');
const passportService = require('./passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
module.exports = function(app) {
  console.log("inside auth router");
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'This is the home route'});
  });
  // app.post('/auth/login', function(req, res) {
  //   console.log("This is the login route");
  //   res.send({ message: 'This is the login route'});
  // } );
  app.post('/auth/login', requireSignin, Authentication.signin);
  app.post('/auth/registration', Authentication.signup);


}
