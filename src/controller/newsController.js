const { newsService } = require('../service')

exports.create = async (req, res) => {
	try {
		const news = await newsService.createNews(req.body)
		res
			.status(201)
			.json({ news, message: 'Muvaffaqiyatli saqlandi', success: true })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

exports.getAll = async (req, res) => {
	try {
		const { page, limit } = req.query
		const result = await newsService.getNews({ page, limit })
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

exports.getOne = async (req, res) => {
	try {
		const news = await newsService.getNewsById(req.params.id)
		if (!news) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ news })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

exports.update = async (req, res) => {
	try {
		const updated = await newsService.updateNews(req.params.id, req.body)
		if (!updated) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ updated, message: 'Muvaffaqiyatli yangilandi' })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

exports.remove = async (req, res) => {
	try {
		const deleted = await newsService.deleteNews(req.params.id)
		if (!deleted) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: 'O‘chirildi' })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
