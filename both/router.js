Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
this.route('home',{path:'/'});

this.route('capstoneprojects', function(){
		this.render('capstoneprojects')
	}, {
		name:'capstoneprojects'
	});

Router.route('/dashboard', {
	name: 'dashboard'
});

Router.route('/project_profile', {
	name: 'profile'
});

Router.route('/aboutus', {
	name: 'aboutus'
});

});
