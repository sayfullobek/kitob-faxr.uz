const { Order } = require('../models')

const createOrder = async data => {
	return await Order.create(data)
}

const getOrder = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		Order.countDocuments(),
		Order.find()
			.skip(skip)
			.limit(limit)
			.sort({ createdAt: -1 })
			.populate(['archetectura', 'archetectura.projects']),
	])
	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data,
	}
}

module.exports = {
	createOrder,
	getOrder,
}
