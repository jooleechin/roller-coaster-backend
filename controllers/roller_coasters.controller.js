const { tableNames : { ROLLER_COASTERS } } =  require('../constants')
const Controller = require('./Controller')(ROLLER_COASTERS)

class PartiesController extends Controller {}

module.exports = PartiesController
