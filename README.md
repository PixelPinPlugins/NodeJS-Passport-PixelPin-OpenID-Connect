# Passport-PixelPin

[Passport](http://passportjs.org/) strategy for authenticating with [PixelPin](http://pixelpin.co.uk)
using the OAuth 2.0 API.

This module lets you authenticate using PixelPin in your Node.js applications.
By plugging into Passport, PixelPin authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

[Create your PixelPin developer account here](https://login.pixelpin.co.uk).
New to Node.js and passportjs?[ Click here](https://scotch.io/tutorials/easy-node-authentication-setup-and-local).

## Install

    $ npm install passport-pixelpin

## Usage

#### Configure Strategy

The PixelPin authentication strategy authenticates users using a PixelPin developer
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, responseType and callback URL.

    passport.use(new PixelPinStrategy({
	clientID: PIXELPIN_APP_ID,
	clientSecret: PIXELPIN_APP_SECRET,
	responseType: "code",
	callbackURL: "http://node.local.com:8080/auth/pixelpin/callback"
	},
	function(accessToken, refreshToken, profile, done) {
	process.nextTick(function () {
		return done(null,profile);
		});
	}));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'pixelpin'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/pixelpin',
	passport.authenticate('pixelpin', {scope: ['email']}),
	function(req,res){
 	});

	app.get('/auth/pixelpin/callback',
	passport.authenticate('pixelpin', { failureRedirect: '/login'}),
	function(req,res) {
    res.redirect('/');
    });

## Examples

For a complete, working example, refer to the [login example](https://github.com/CallumBrankin/passport-pixelpin/tree/master/examples/login).

## Credits

  - [Callum Brankin](https://github.com/CallumBrankin)

## License

[The MIT License](http://opensource.org/licenses/MIT)