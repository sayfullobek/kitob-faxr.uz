const { subNewsService } = require('../service')

exports.create = async (req, res) => {
	try {
		const photo = req.file?.filename
		const created = await subNewsService.createSubNews(req.body, photo)
		res.status(201).json({ created, success: true })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.getAll = async (req, res) => {
	try {
		const { page, limit, newsId } = req.query
		const result = await subNewsService.getSubNews({ page, limit, newsId })
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getOne = async (req, res) => {
	try {
		const found = await subNewsService.getSubNewsById(req.params.id)
		if (!found) return res.status(404).json({ message: 'Topilmadi' })
		res.json(found)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.update = async (req, res) => {
	try {
		const updated = await subNewsService.updateSubNews(req.params.id, req.body)
		if (!updated) return res.status(404).json({ message: 'Topilmadi' })
		res.json(updated)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.remove = async (req, res) => {
	try {
		const deleted = await subNewsService.deleteSubNews(req.params.id)
		if (!deleted) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: 'O‘chirildi' })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}
