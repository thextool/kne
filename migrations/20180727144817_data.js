exports.up = function (knex, Promise) {
    return knex.schema.createTable('resolutions', (table) => {
        table.increments('id')
        table.date('dueDate').notNullable()
        table.text('resolution').notNullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('resolutions')
};