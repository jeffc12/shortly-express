const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you session database model methods here

class Sessions extends Model {
  constructor () {
    super('sessions');
    
  }
  // randomNumber() {
  // 	return 
  // }
  // hash() {
  //   return utils.createSalt(40);
  // }
}

module.exports = new Sessions();
