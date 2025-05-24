// archetecturas.controller.js
const { Archetecturas } = require('../service')

exports.create = async (req, res) => {
	try {
		const result = await Archetecturas.createArchetectura(req.body)
		res.status(201).json(result)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.getAll = async (req, res) => {
	try {
		const result = await Archetecturas.getArchetecturas(req.query)
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getOne = async (req, res) => {
	try {
		const result = await Archetecturas.getArchetecturaById(req.params.id)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.update = async (req, res) => {
	try {
		const result = await Archetecturas.updateArchetectura(
			req.params.id,
			req.body
		)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json(result)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.remove = async (req, res) => {
	try {
		const result = await Archetecturas.deleteArchetectura(req.params.id)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: "O'chirildi" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}
