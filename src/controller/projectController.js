const { projectService } = require('../service')

exports.create = async (req, res) => {
	try {
		const photo = req.file?.filename
		const created = await projectService.createProject(req.body, photo)
		res.status(201).json({ created, success: true })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.getAll = async (req, res) => {
	try {
		const { page, limit } = req.query
		const result = await projectService.getProjects({ page, limit })
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getOne = async (req, res) => {
	try {
		const found = await projectService.getProjectById(req.params.id)
		if (!found) return res.status(404).json({ message: 'Topilmadi' })
		res.json(found)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.update = async (req, res) => {
	try {
		const updated = await projectService.updateProject(req.params.id, req.body)
		if (!updated) return res.status(404).json({ message: 'Topilmadi' })
		res.json(updated)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.remove = async (req, res) => {
	try {
		const deleted = await projectService.deleteProject(req.params.id)
		if (!deleted) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: 'Loyiha o‘chirildi' })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}
