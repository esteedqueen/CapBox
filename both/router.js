Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
this.route('home',{path:'/'});

this.route('/capstone_projects', {
	name: 'capstoneProjects',
	onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
});


this.route('/new_capstone_project', {
	name: 'projectForm'
});

this.route('/project_profile', {
	name: 'profile'
});

this.route('/aboutus', {
	name: 'aboutus'
});

});

