// Template.registerHelper('User', function() {
//   return Meteor.user();
// });

UI.registerHelper('summarizeDesc', function(solutionStatement, maxChar){
	if (solutionStatement.length > maxChar) {
		return solutionStatement.substring(0, maxChar) + '...';
	}
		return solutionStatement;

});