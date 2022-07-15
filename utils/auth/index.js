const passport = require("passport");
const { LocalStrategy } = require('./strategies/local.strategies');
const { JwtStrategy } = require('./strategies/jwt.strategy');
function setUpStrategies() {
    passport.use(LocalStrategy)
    passport.use(JwtStrategy)
}
module.exports = { setUpStrategies, };