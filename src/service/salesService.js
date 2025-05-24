const { Sales } = require('../models')

// Create
const createSale = async data => {
	return await Sales.create(data)
}

// Get all with pagination
const getSales = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		Sales.countDocuments(),
		Sales.find().skip(skip).limit(limit),
	])
	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data,
	}
}

// Get one
const getSaleById = async id => {
	return await Sales.findById(id)
}

// Update
const updateSale = async (id, data) => {
	return await Sales.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	})
}

// Delete
const deleteSale = async id => {
	return await Sales.findByIdAndDelete(id)
}

module.exports = {
	createSale,
	getSales,
	getSaleById,
	updateSale,
	deleteSale,
}
