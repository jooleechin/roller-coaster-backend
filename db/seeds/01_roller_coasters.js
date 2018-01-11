const { tableNames : { ROLLER_COASTERS } } =  require('../../constants')

exports.seed = knex => {
  return knex(ROLLER_COASTERS).del().then(() => {
    return knex(ROLLER_COASTERS).insert([
      { id: 1, name: 'Lightning Rod', park: 'Dollywood', city: 'Pigeon Forge', state: 'Tennessee' },
      { id: 2, name: 'Goliath', park: 'Six Flags Magic Mountain', city: 'Valencia', state: 'California' },
      { id: 3, name: 'Millennium Force', park: 'Cedar Point', city: 'Sandusky', state: 'Ohio' },
      { id: 4, name: 'Leap-The-Dips', park: 'Lakemon Park', city: 'Altoona', state: 'Pennsylvania' },
      { id: 5, name: 'Fury 325', park: 'Carowinds', city: 'Charlotte', state: 'North Carolina' }
    ])
  }).then(() => {
    return knex.raw(`SELECT setval('${ROLLER_COASTERS}_id_seq', (SELECT MAX(id) FROM ${ROLLER_COASTERS}));`)
  })
}
