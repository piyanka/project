var express= require('express');
var app =express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport =require('passport');
var  FacebookStrategy = require('passport-facebook').Strategy;
//set middleware

app.use(bodyParser.json());
app.use(session({
	secret: 'developer',
	resave: true,
	saveUnintialized:true
}));

var FACEBOOK_APP_ID = '248164509038824',
 FACEBOOK_APP_SECRET = '7b83ea9bb3f14e378b0afe1529985ba9',

var  fbOpts = {

 
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['emails']
  
  };

  var fbCallback = function(accessToken, refreshToken, profile,cb){
 
 	
     console.log(accessToken,refreshToken,profile)
 };

 passport.use(new FacebookStrategy(fbOpts,fbCallback));

app.route('/')
.get(passport.authenticate('facebook',{ scope: ['email']}));

app.route('/auth/facebook/callback')
.get(passport.authenticate('facebook',function(err,user,info){
	    console.log(err,user,info);

}));	   
app.listen(3000);
console.log("port is running at: 3000 " )

