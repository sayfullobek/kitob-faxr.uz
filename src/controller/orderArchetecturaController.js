// archetecturas.controller.js
const { orderArchetecturaService } = require('../service')

exports.create = async (req, res) => {
	try {
		const result = await orderArchetecturaService.createOrder(req.body)
		res.status(201).json({ result, success: true })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.getAll = async (req, res) => {
	try {
		const result = await orderArchetecturaService.getOrder(req.query)
		res.json(result)
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err.message })
	}
}
