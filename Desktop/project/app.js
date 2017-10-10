app.get('/auth/facebook' ,passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
passport.authentication('facebook', { successRedirect: '/',
failureRedirect:'/login'}));

app.get('/auth/facebook',
	passport.authenticate('facebook',{ scope: 'read_stream' })
	);
<a href="/auth/facebook">Login wth facebook</a>
