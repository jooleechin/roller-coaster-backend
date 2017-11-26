const db = require('../db')
const Model = require('./Model')('parties')

class Party extends Model {}

module.exports = Party
