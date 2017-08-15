/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `UserController.login()`
   */
  login: function (req, res) {

    // See `api/responses/login.js`
    return res.login({
      email: req.param('email'),
      password: req.param('password'),
      successRedirect: '/welcome',
      invalidRedirect: '/login'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {

   //Usurio olvido su informacion
    req.session.me = null;

   //Desconexion exitosa
    if (req.wantsJSON) {
      return res.ok('Se ha logeado con exito!');
    }

   //Redireccionar
    return res.redirect('/');
  },


  /**
   * `UserController
   */
  signup: function (req, res) {

    // Attempt to signup a user using the provided parameters
    User.signup({
      name: req.param('name'),
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      //Esy¡tablecer negociacion
      if (err) return res.negotiate(err);


      req.session.me = user.id;

      if (req.wantsJSON) {
        return res.ok('Signup successful!');
      }
      return res.redirect('/welcome');
    });
  }
};

