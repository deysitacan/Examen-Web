/**
* User.js
*
* @description :: TODO:
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    pizza: {
      collection: 'Pizza',
      via: 'fkIdUsuario'
    }

  },


  /**
   * Create a new user using the provided inputs,
   * but encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • na
   signup: function (inputs, cb) {
    // Create a userme     {String}
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} cb
   */
  signup: function (inputs, cb) {
    User.create({
      name: inputs.name,
      email: inputs.email,
      // TODO: Ebcripta la primera clave
      password: inputs.password
    })
    .exec(cb);
  },



  /**
   * Check validness of a login using the provided inputs.
   * But encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} cb
   */

  attemptLogin: function (inputs, cb) {
    // Create a user
    User.findOne({
      email: inputs.email,
      // TODO: But encrypt the password first
      password: inputs.password
    })
    .exec(cb);
  }
};

