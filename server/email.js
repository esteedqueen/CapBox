Accounts.onCreateUser(function (options, user) {
	user.profile ={};

	Meteor.setTimeout(function() {
		Accounts.sendVerificationEmail(user._id);
	}, 2 * 1000);

	return user;
});

Accounts.validateLoginAttempt(function(attempt) {
	if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified) {
		console.log('email not verified');

		return false;
	}
	return true;
});