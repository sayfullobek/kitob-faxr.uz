// archetecturas.service.js
const { Archetecturas } = require('../models')

const createArchetectura = async (data, photo) => {
	const dat = {
		photo: photo,
		kvartiraNumber: data.kvartiraNumber,
		maydon: data.maydon,
		xonalar: data.xonalar,
		qavat: data.qavat,
		endDate: data.endDate,
		seksiya: data.seksiya,
		navbat: data.navbat,
		soldOut: false,
		projects: data.projects,
	}
	return await Archetecturas.create(dat)
}

const getArchetecturas = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		Archetecturas.countDocuments(),
		Archetecturas.find({ soldOut: false })
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

const getArchetecturasAll = async ({ page = 1, limit = 10 }) => {
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

const getSubNewsByNewsId = async newsId => {
	return await Archetecturas.find({ news: newsId }).populate('news')
}

const getArchetecturaByProjectId = async (
	projectId,
	{ page = 1, limit = 10 }
) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		Archetecturas.countDocuments(),
		Archetecturas.find({ projects: projectId, soldOut: false })
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

const updateArchetectura = async (id, data, photo) => {
	return await Archetecturas.findByIdAndUpdate(
		id,
		{
			photo: photo ? photo : data.photo,
			kvartiraNumber: data.kvartiraNumber,
			maydon: data.maydon,
			xonalar: data.xonalar,
			qavat: data.qavat,
			endDate: data.endDate,
			seksiya: data.seksiya,
			navbat: data.navbat,
			soldOut: false,
			projects: data.projects,
		},
		{
			new: true,
			runValidators: true,
		}
	)
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
	getArchetecturaByProjectId,
	getSubNewsByNewsId,
	getArchetecturasAll,
}
