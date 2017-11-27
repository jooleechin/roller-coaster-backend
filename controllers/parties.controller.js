const constants = require('../constants')
const Controller = require('./Controller')(constants.tableNames.Party)

class PartiesController extends Controller {}

module.exports = PartiesController
