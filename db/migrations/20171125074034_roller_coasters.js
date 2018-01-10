const { tableNames : { ROLLER_COASTERS } } =  require('../constants')

exports.up = knex => {
  return knex.schema.createTable('ROLLER_COASTERS', table => {
    table.increments()
    table.string('name').notNullable()
    table.text('park').notNullable()
    table.text('city').notNullable()
    table.text('state').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('roller_coasters')
}
