// archetecturas.service.js
const { Archetecturas } = require('../models')

const createArchetectura = async data => {
	return await Archetecturas.create(data)
}

const getArchetecturas = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		Archetecturas.countDocuments(),
		Archetecturas.find()
			.populate('projects')
			.skip(skip)
			.limit(limit)
			.sort({ createdAt: -1 }),
	])
	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data,
	}
}

const getArchetecturaById = async id => {
	return await Archetecturas.findById(id).populate('projects')
}

const updateArchetectura = async (id, data) => {
	return await Archetecturas.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	})
}

const deleteArchetectura = async id => {
	return await Archetecturas.findByIdAndDelete(id)
}

module.exports = {
	createArchetectura,
	getArchetecturas,
	getArchetecturaById,
	updateArchetectura,
	deleteArchetectura,
}
