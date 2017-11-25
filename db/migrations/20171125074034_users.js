exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('email').notNullable().unique()
    table.text('password').notNullable()
    table.enu('role', [ 'admin', 'vip', 'user' ]).defaultTo('user')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
