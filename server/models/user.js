const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here

class Users extends Model {
  constructor () {
    super('users');
  }
  create(options) {
    options.salt = utils.createSalt(64);
    options.password = utils.createHashedPassword(options.password, options.salt);
    return super.create.call(this, options);

  }
}

module.exports = new Users();