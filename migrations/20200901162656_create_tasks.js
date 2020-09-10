
exports.up = async function(knex) {
    await knex.schema.createTable("tasks", (table) => {
		table.increments("id")
		table.text("name").notNull()
        table.text("description").notNull()
        table.text("notes")
        table.boolean("completed").notNull().defaultTo(false)
	// 	// create a foreign key
		table
			.integer("project_id")
			.references("id")
			.inTable("projects")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
			
	})
};


exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("tasks")
};
