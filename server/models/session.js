const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you session database model methods here

class Sessions extends Model {
  constructor () {
    super('sessions');
  }
  hash() {
    return;
  }
}

module.exports = new Sessions();
