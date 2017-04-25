const models = require('../models');
const Promise = require('bluebird');
const utils = require('../lib/hashUtils');

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.createSession = (req, res, next) => {
	req.session = models.Sessions;
	if ( Object.keys(req.cookies).length === 0 ) {
		res.cookies['shortlyid'] = {value: utils.createSalt(40)};
	}
	req.session.hash = function () {
		return utils.createSalt(40);
	}
	next();
};