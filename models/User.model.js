const db = require('../db')
const Model = require('./Model')('users')

class User extends Model {
  static login (email, password) {
    return db('users').where({ email }).first().then(user => {
      if (user.password === password) {
        return user
      } else {
        throw new Error(`User authentication failed`)
      }
    })
  }
}

module.exports = User
