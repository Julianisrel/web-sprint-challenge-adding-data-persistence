const express = require("express")
const Project  = require("../models/projectModel")
const router = express.Router()

router.get("/projects", async (req, res, next) => {
	try {
		const projects = await Project.find()
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

router.get("/projects/:id", async (req, res, next) => {
	try {
		const project = await Project.findById(req.params.id)
		if (!project) {
			return res.status(404).json({
				message: "Project not found",
			})
		}
		res.json(project)
	} catch(err) {
		next(err)
	}
})

router.post('/projects', async (req, res, next) => {
	try {
		const ProjectData = await Project.createProject(req)
		res.json(ProjectData)
	} catch (err) {
		next(err)
	}
})



router.get("/projects/:id/resources", async (req, res, next) => {
	try {
		const resources = await Project.findProjectsResources(req.params.id)
		if (!resources) {
			return res.status(404).json({
				message: "Resources not found",
			})
		}
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.get("/projects/:id/tasks", async (req, res, next) => {
	try {
		const tasks = await Project.findProjectsTasks(req.params.id)
		if (!tasks) {
			return res.status(404).json({
				message: "Resources not found",
			})
		}
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})
module.exports = router