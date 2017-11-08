/**
 * Module dependencies.
 */
const util = require('util')
const OpenIDStrategy = require('passport-openid').Strategy
const defaults = { providerURL: 'https://www.google.com/accounts/o8/id' }

/**
 * `Strategy` constructor.
 *
 * The Google authentication strategy authenticates requests by delegating to
 * Google using the OpenID 2.0 protocol.
 *
 * Applications must supply a `validate` callback which accepts an `identifier`,
 * and optionally a service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `returnURL`  URL to which Google will redirect the user after
 *                  authentication
 *   - `realm`      the part of URL-space for which an OpenID authentication
 *                  request is valid
 *   - `profile`    enable profile exchange, defaults to _true_
 *
 * Examples:
 *
 *     passport.use(new GoogleStrategy({
 *         returnURL: 'http://localhost:3000/auth/google/return',
 *         realm: 'http://localhost:3000/'
 *       },
 *       function(identifier, profile, done) {
 *         User.findByOpenID(identifier, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
class Strategy {

  constructor(options = {}, validate = void 0) {
    options.profile = ((options.profile === void 0) || options.profile)
    OpenIDStrategy.call(this, Object.assign(defaults, options), validate)
    this.name = 'google'
  }

}

/**
 * Inherit from `OpenIDStrategy`.
 */
util.inherits(Strategy, OpenIDStrategy)


/**
 * Expose `Strategy`.
 */ 
module.exports = Strategy
