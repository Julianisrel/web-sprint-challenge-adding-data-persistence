const db = require("../data/config")
function find() {
	return db("projects")
}
function findById(id) {
	return db("projects")
		.where("id", id)
		.first()
}
async function createProject(req) {
    console.log(req)
    console.log("req: ", req.body, req.params, req.formData)
    const projectId = await db('projects').insert({...req.body})
    return findById(projectId)
}

function findProjectsResources(id) {
	return db("resources")
		.where("project_id", id)
		.first()
}

function findProjectsTasks(id) {
	return db("tasks")
		.where("project_id", id)
		.first()
}

module.exports = {
	find,
	findById,
	createProject,
	findProjectsResources,
	findProjectsTasks

}