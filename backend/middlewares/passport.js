const passport = require('passport');
const { User } = require('../models');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    if (jwt_payload.userId) {
        return done(null,true)
    }
    return done('auth failed',false)
}));