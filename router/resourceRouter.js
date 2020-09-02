const express = require("express")
const Resource  = require("../models/resourceModel")
const router = express.Router()


// get all resources
router.get("/resources", async (req, res, next) => {
	try {
		const resources = await Resource.find()
		res.json(resources)
	} catch(err) {
		next(err)
	}
})
// get resources by id 
router.get("/resources/:id", async (req, res, next) => {
	try {
		const resource = await Resource.findById(req.params.id)
		if (!resource) {
			return res.status(404).json({
				message: "resource not found",
			})
		}
		res.json(resource)
	} catch(err) {
		next(err)
	}
})

router.post('/resources', async (req, res, next) => {
	try {
		const resourceData = await Resource.createResource(req)
		res.json(resourceData)
	} catch (err) {
		next(err)
	}
})

router.get("/resources/:id/projects", async (req, res, next) => {
	try {
		const projects = await Resource.findResourcesProjects(req.params.id)
		if (!projects) {
			return res.status(404).json({
				message: "projects not found",
			})
		}
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

router.get("/resources/:resource_id/tasks/:task_id", async (req, res, next) => {
	try {
		const { resource_id, task_id } = req.params
		const resource = await Resource.addTaskToResource({resource_id, task_id})
		if (!resource) {
			return res.status(404).json({
				message: "resource not found",
			})
		}
		res.json(resource)
	} catch(err) {
		next(err)
	}
})

module.exports = router