Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
this.route('home',{path:'/'});

this.route('loggedIn', function(){
		this.render('loggedIn')
	}, {
		name:'loggedIn'
	});

Router.route('/capstone_projects', {
	name: 'capstoneProjects',
	onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
});


Router.route('/new_capstone_idea', {
	name: 'projectsForm'
});

Router.route('/teamprofile', {
	name: 'profile'
});

Router.route('/aboutus', {
	name: 'aboutus'
});

});

