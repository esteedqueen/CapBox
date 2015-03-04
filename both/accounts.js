Accounts.config({
	restrictCreationByEmailDomain: 'meltwater.org',
	sendVerificationEmail: true
});

if (Meteor.isClient) {
  Meteor.startup(function() {
  	AccountsEntry.config({
  		homeRoute: '/',
  		dashboardRoute: '/capstone_projects'

  	});
  	});
  }