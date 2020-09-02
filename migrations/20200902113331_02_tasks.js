
exports.up = async function(knex) {
    await knex.schema.table('resources', function (table) {
        table
            .integer("task_id")
            .references("id")
            .inTable("tasks")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })
}

exports.down = async function(knex) {
  awaitknex.schema.table('resources', table => table.dropColumn('task_id'))
};