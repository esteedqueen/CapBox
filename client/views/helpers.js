// Template.registerHelper('User', function() {
//   return Meteor.user();
// });
// Template.projectForm.events({
//   'change .fileInput': function(event, template) {
//     event.preventDefault();
//     FS.Utility.eachFile(event, function(file) {
//     	// var fileObj = new FS.File(file);
//     	Images.insert(file, function (err, fileObj) {
//     		//inserted new do with ID fileObj._id and kicked off the data upload using HTTP
//     		// console.log(err);
//     	});
//     });
//   }
// });

// Template.projects.helpers({
// 	images:function () {
// 		return Images.find();
// 	}
// 	// images: function() {
// 	// 	return Images.findOne({project: this._id});
// 	// }
// });

UI.registerHelper('summarizeDesc', function(solutionStatement, maxChar){
	if (solutionStatement.length > maxChar) {
		return solutionStatement.substring(0, maxChar) + '...';
	}
		return solutionStatement;

});
