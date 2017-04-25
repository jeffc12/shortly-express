const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
	if ( Object.keys(req.cookies).length === 0 ) {
		req.session = models.Sessions;
		console.log('value',req);
		res.cookies['shortlyid'] = {value: '8a864482005bcc8b968f2b18f8f7ea490e577b20'};
	}
	next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

