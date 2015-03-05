Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
this.route('home',{path:'/'});

this.route('/capstone_projects', {
	name: 'capstoneProjects',
	onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    },
    data: function () {
		return {                        // objects to be rendered in tempate e.g. {{pageTitle}}
  		projects: Projects.find().fetch()
  	}
	}
});


this.route('/new_capstone_project', {
	name: 'projectForm'
});

this.route('/project_profile/:_id', {
	name: 'projectProfile',
	data: function () {
		return Projects.findOne(this.params._id); 
	}
});

this.route('/aboutus', {
	name: 'aboutus'
});

});

