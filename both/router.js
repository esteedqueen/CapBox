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

Router.route('/dashboard', {
	name: 'dashboard'
});

Router.route('/teamprofile', {
	name: 'profile'
});

Router.route('/aboutus', {
	name: 'aboutus'
});

});
