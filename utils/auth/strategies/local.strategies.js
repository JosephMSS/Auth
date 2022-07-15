const { Strategy } = require("passport-local");
const boom = require('@hapi/boom');
const { compare } = require('bcrypt');
const UserService = require("../../../services/user.service")
const service = new UserService()
const configStrategy = {
    usernameField: "email",
    passwordField: "password"
}
const LocalStrategy = new Strategy(
    configStrategy,
    async (email, password, done) => {
        try {
            const user = await service.findByEmail(email)
            if (!user) {
                return done(boom.notFound(), false)
            }
            const isMatch = await compare(password, user.password)
            if (!isMatch) {
                return done(boom.unauthorized(), false)
            }
            return done(null, user)
        } catch (error) {
            return done(error, false)
        }
    })
module.exports = { LocalStrategy, };