const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require('@hapi/boom');
const { config: { libs: { jwt: { secret } } } } = require("../../../config");
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}
const JwtStrategy = new Strategy(options, (payload, done) => {
    console.log('JMMS_payload',payload)
    return done(null, payload)
})
module.exports = { JwtStrategy, };