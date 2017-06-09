/**
 * Module dependencies.
 */
var util = require('util')
  , OpenIDConnectStrategy = require('./lib/Passport-openidconnect-modified/lib/index').Strategy;

  /**
 * `Strategy` constructor.
 *
 * The PixelPin authentication strategy authenticates requests by delegating to
 * PixelPin using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your application's App ID
 *   - `clientSecret`  your application's App Secret
 *   - `callbackURL`   URL to which PixelPin will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new PixelPinStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/pixelpin/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */

  function Strategy(options, verify) {
  	options = options || {};
    options.issuer = options.issuer || 'https://login.pixelpin.io/';
  	options.authorizationURL = options.authorizationURL || 'https://login.pixelpin.io/connect/authorize';
    options.tokenURL = options.tokenURL || 'https://login.pixelpin.io/connect/token';
    options.userInfoURL = options.userInfoURL || 'https://login.pixelpin.io/connect/userinfo';

    OpenIDConnectStrategy.call(this, options, verify);
    this.name = 'pixelpin';

    //this._oauth2.setAccessTokenName("oauth_token");
  }

  /**
    * Inherit from `OAuth2Strategy`.
  */
  util.inherits(Strategy, OpenIDConnectStrategy);

/**
 * Retrieve user profile from PixelPin.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - 'provider'         always set to `pixelpin`
 *   - 'id'
 *   - 'email'
 *   - 'firstName'
 *   - 'lastName'
 *   - 'address1'
 *   - 'address2'
 *   - 'country'
 *   - 'countyorstate'
 *   - 'dob'
 *   - 'gender'
 *   - 'phone'
 *   - 'postcode'
 *   - 'towncity'
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */

  module.exports = Strategy;