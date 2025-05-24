const { salesService } = require('../service')

// Create
exports.create = async (req, res) => {
	try {
		const sale = await salesService.createSale(req.body)
		res.status(201).json({ sale, success: true })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Get all (with pagination)
exports.getAll = async (req, res) => {
	try {
		const { page, limit } = req.query
		const sales = await salesService.getSales({ page, limit })
		res.json(sales)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get one by ID
exports.getOne = async (req, res) => {
	try {
		const sale = await salesService.getSaleById(req.params.id)
		if (!sale) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ sale, success: true })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Update
exports.update = async (req, res) => {
	try {
		const sales = await salesService.updateSale(req.params.id, req.body)
		if (!sales) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: 'Muvaffaqiyatli yangilandi', success: true })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Delete
exports.remove = async (req, res) => {
	try {
		const deleted = await salesService.deleteSale(req.params.id)
		if (!deleted) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: 'O‘chirildi', success: true })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
