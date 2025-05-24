const { News } = require('../models')

const createNews = async data => {
	return await News.create(data)
}

const getNews = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		News.countDocuments(),
		News.find().skip(skip).limit(limit),
	])
	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data,
	}
}

const getNewsById = async id => {
	return await News.findById(id)
}

const updateNews = async (id, data) => {
	return await News.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	})
}

const deleteNews = async id => {
	return await News.findByIdAndDelete(id)
}

module.exports = {
	createNews,
	getNews,
	getNewsById,
	updateNews,
	deleteNews,
}
