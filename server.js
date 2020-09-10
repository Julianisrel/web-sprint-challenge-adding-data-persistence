const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./router/projectRouter")
const taskRouter = require("./router/taskRouter")
const { createResource } = require("./models/resourceModel")
const resourceRouter =require("./router/resourceRouter")

const server = express()
const port = process.env.PORT || 6000
server.use(helmet())
server.use(express.json())
server.use(projectRouter)
server.use(taskRouter)
server.use(resourceRouter)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})