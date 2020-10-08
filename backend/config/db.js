const config = require('../knexfile.js')
const knex = require('knex')(config)

// Talvez para um banco de dados grande
// não seja ideal utilizar o latest para automatizar o Bd
knex.migrate.latest([config])
module.exports = knex