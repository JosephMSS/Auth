const express = require('express');
const passport = require('passport');
const { sign } = require('jsonwebtoken');
const { config: { libs: { jwt: { secret } } } } = require('../config')
const router = express.Router();
router.post('/login',
  passport.authenticate("local", { session: false }), async (req, res, next) => {
    try {
      const { user } = req;
      const payload = {
        sub: user.id,
        email: user.email
      }
      const token = sign(payload, secret)
      res.status(200).json({ user, token });
    } catch (error) {
      next(error);
    }
  }
);
router.post('/verify',
  passport.authenticate("jwt", { session: false }), async (req, res, next) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

