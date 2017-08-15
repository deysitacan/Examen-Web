/**
 * res.login([inputs])
 *
 * @param {String} inputs.username
 * @param {String} inputs.password
 *
 * @description :: Log the requesting user in using a passport strategy
 * @help        :: See http://links.sailsjs.org/docs/responses
 */

module.exports = function login(inputs) {
  inputs = inputs || {};

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Datos de usuario
  User.attemptLogin({
    email: inputs.email,
    password: inputs.password
  }, function (err, user) {
    if (err) return res.negotiate(err);
    if (!user) {

      // enviar una respuesta 200 dejando al agente de usuario saber que el inicio de //sesión fue satisfactorio.
      if (req.wantsJSON || !inputs.invalidRedirect) {
        return res.badRequest('Invalid username/password combination.');
      }

      return res.redirect(inputs.invalidRedirect);
    }
    req.session.me = user.id;
    if (req.wantsJSON || !inputs.successRedirect) {
      return res.ok();
    }

    // De lo contrario, si se trata de un navegador que desea HTML, redirija a /.
    return res.redirect(inputs.successRedirect);
  });

};
