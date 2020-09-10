
exports.up = async function(knex) {
	await knex.schema.createTable("projects", (table) => {
		table.increments("id")
		table.text("name").notNull()
        table.text("description")
        table.boolean("completed").notNull().defaultTo(false)
	})
	// await knex.schema.createTable("zoos_animals", (table) => {
	// 	table.integer("zoo_id")
	// 		.notNull()
	// 		.references("id")
	// 		.inTable("zoos")
	// 		.onDelete("CASCADE")
	// 		.onUpdate("CASCADE")
	// 	table.integer("animal_id")
	// 		.notNull()
	// 		.references("id")
	// 		.inTable("animals")
	// 		.onDelete("CASCADE")
	// 		.onUpdate("CASCADE")
  //
	// 	// knex.raw will pass `current_timestamp` without quotes, meaning it's
	// 	// an internal SQL variable and not a literal string
	// 	table.date("from_date").notNull().defaultTo(knex.raw("current_timestamp"))
	// 	table.date("to_date")
  //
	// 	// since this table doesn't need an ID column, we can make the
	// 	// primary key a combination of two columns rather than a single one
	// 	table.primary(["zoo_id", "animal_id"])
	// })
}
exports.down = async function(knex) {
	// make sure the tables are dropped in the reverse order they were created in,
	// to prevent dropping tables that are referenced by other foreign keys
	await knex.schema.dropTableIfExists("projects")
}