AutoForm.hooks({
  addProject: {
    onSuccess: function(operation, result, template) {
      Router.go('capstoneProjects');
    },
    onError: function(operation, error, template) {
      alert(error)
    }
  }
});