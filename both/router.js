Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
this.route('home',{path:'/'});

Router.route('/capstone_projects', {
	name: 'capstoneProjects',
	onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
});


Router.route('/new_capstone_project', {
	name: 'projectForm'
});

Router.route('/project_profile', {
	name: 'profile'
});

Router.route('/aboutus', {
	name: 'aboutus'
});

});

