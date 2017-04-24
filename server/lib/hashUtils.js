const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

exports.createSalt = function(length) {
	return crypto.randomBytes(length).toString('hex');
}

exports.createHashedPassword = function(password, salt) {
	salt = salt || createSalt(64);
	return crypto.createHash('sha256').update(password+""+salt).digest('hex');
}