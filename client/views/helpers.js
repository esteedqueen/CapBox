// Template.registerHelper('User', function() {
//   return Meteor.user();
// });
// Template.projectForm.events({
//   'change input': function(event, template) {
//     FS.Utility.eachFile(event, function(file) {
//     	Images.insert(new FS.File(file), function (err) {
//     		console.log(err)
//     	});
//     });
//   }
// });

Template.projects.helpers({
	'images':function () {
		return Images.find().fetch();
	}
});

UI.registerHelper('summarizeDesc', function(solutionStatement, maxChar){
	if (solutionStatement.length > maxChar) {
		return solutionStatement.substring(0, maxChar) + '...';
	}
		return solutionStatement;

});
