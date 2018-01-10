const db = require('../db')
const { tableNames : { ROLLER_COASTERS } } =  require('../constants')
const Model = require('./Model')(ROLLER_COASTERS)

class Party extends Model {}

module.exports = Party
