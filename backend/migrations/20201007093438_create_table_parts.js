
exports.up = function (knex, Promise) {
    return knex.schema.createTable('parts', table => {
        table.increments('id').primary()
        table.string('nome',200).notNull().unique()
        table.string('veiculo',200)
        table.float('pesoliquido',2,8).notNull()
        table.float('pesobruto',2,8).notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('parts')
};