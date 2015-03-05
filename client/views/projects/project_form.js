



AutoForm.hooks({
  addProject: {
   //  after: {
   //   insert: function(error, result, template) {
   //     insertedFile = Projects.findOne(result).projectlogo;
   //     Images.update({_id: insertedFile}, {$set: {'project': result}});
   //   }
   // }
    onSuccess: function(operation, result, template) {
      Router.go('capstoneProjects');

    },
    onError: function(operation, error, template) {
      alert(error)
    }
    
  }
});




// // AutoForm.hooks({
// //  addProject: {
// //    after: {
// //      insert: function(error, result, template) {
// //        insertedFile = Projects.findOne(result).projectlogo;
// //        Images.update({_id: insertedFile}, {$set: {'project': result}});
// //      }
// //    }
// //  }
// // });