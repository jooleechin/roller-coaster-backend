exports.up = knex => {
  return knex.schema.createTable('parties', table => {
    table.increments()
    table.string('name').notNullable().unique()
    table.boolean('isVip').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('parties')
}
