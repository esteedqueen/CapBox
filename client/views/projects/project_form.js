AutoForm.hooks({
  addProject: {
    onSuccess: function(operation, result, template) {
      Router.go('profile');
    },
    onError: function(operation, error, template) {
      alert(error)
    }
  }
});