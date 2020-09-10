const db = require("../data/config")
function find() {
	return db("tasks")
}
function findById(id) {
	return db("tasks")
		.where("id", id)
		.first()
}
async function createTask(req) {
    const taskId = await db('tasks').insert({...req.body})
    return findById(taskId)
}




module.exports = {
	find,
	findById,
	createTask,
	
}