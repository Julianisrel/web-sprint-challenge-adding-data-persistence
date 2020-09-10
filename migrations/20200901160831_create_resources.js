
exports.up = async function(knex) {
    await knex.schema.createTable("resources", (table) => {
		table.increments("id")
		table.text("name").notNull()
		table.text("description")
	// 	// create a foreign key
		table
			.integer("projects_id")
			.references("id")
			.inTable("projects")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
			
	})
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("resources")
};
