// archetecturas.controller.js
const { Archetecturas } = require('../models')
const { archetecturasService } = require('../service')

exports.create = async (req, res) => {
	try {
		const photo = req.file?.filename
		const result = await archetecturasService.createArchetectura(
			req.body,
			photo
		)
		res.status(201).json({ result, success: true })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.getAll = async (req, res) => {
	try {
		const result = await archetecturasService.getArchetecturas(req.query)
		res.json(result)
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err.message })
	}
}

exports.getAllArchetectura = async (req, res) => {
	try {
		const result = await archetecturasService.getArchetecturasAll(req.query)
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getOne = async (req, res) => {
	try {
		const result = await archetecturasService.getArchetecturaById(req.params.id)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getProjects = async (req, res) => {
	try {
		const result = await archetecturasService.getArchetecturaByProjectId(
			req.params.id,
			req.query
		)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.update = async (req, res) => {
	try {
		const result = await archetecturasService.updateArchetectura(
			req.params.id,
			req.body,
			req.file?.filename
		)
		if (!result)
			return res.status(404).json({ message: 'Topilmadi', success: false })
		res.json({ result, success: true })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}
exports.updateSoldOut = async (req, res) => {
	try {
		const result = await Archetecturas.findByIdAndUpdate(
			req.params.id,
			{ soldOut: req.body.soldOut },
			{ new: true }
		)
		if (!result)
			return res.status(404).json({ message: 'Topilmadi', success: false })
		res.json({ message: 'Muvaffaqiyatli bajarildi', success: true })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.remove = async (req, res) => {
	try {
		const result = await archetecturasService.deleteArchetectura(req.params.id)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: "O'chirildi" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}
