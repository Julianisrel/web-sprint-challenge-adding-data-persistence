const db = require("../data/config")
function find() {
	return db("resources")
}
function findById(id) {
	return db("resources")
		.where("id", id)
		.first()
}
async function createResource(req) {
    const resourcesId = await db('resources').insert({...req.body})
    return findById(resourcesId)
}

function findResourcesProjects(id) {
	return db.raw(`
		SELECT projects.name AS name, 
		projects.description AS description,
		projects.completed AS completed,
		projects.id AS id
		FROM projects
		JOIN resources ON
		resources.project_id = projects.id
		WHERE resources.id = ${id}
		AND resources.project_id = projects.id
	`)
}

async function addTaskToResource({resource_id, task_id}) {
	await db.raw(`
		UPDATE resources
		SET task_id = ${task_id}
		WHERE id = ${resource_id};
	`)

	return findById(resource_id)
}

module.exports = {
	find,
	findById,
	createResource,
	findResourcesProjects,
	addTaskToResource
}