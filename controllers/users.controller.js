const User = require('../models/User.model')
const Controller = require('./Controller')('users')

class UsersController extends Controller {
  static login (req, res, next) {
    const { email, password } = req.body
    User.login(email, password)
    .then(user => res.json({ user }))
    .catch(() => {
      const status = 401
      const message = `Please check your email and password`
      res.status(status).json({ status, message })
    })
  }
}

module.exports = UsersController
