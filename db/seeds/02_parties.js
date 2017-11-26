const table = 'parties'
exports.seed = knex => {
  return knex(table).del().then(() => {
    return knex(table).insert([
      { id: 1, name: 'Galvanize Alumni Holiday Party', isVip: false },
      { id: 2, name: 'Galvanize Employees Holiday Party', isVip: true }
    ])
  }).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
