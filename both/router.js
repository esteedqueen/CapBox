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
});
