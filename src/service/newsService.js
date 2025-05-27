const { News, SubNews } = require('../models')

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

const getNewsAndSub = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		News.countDocuments(),
		News.find().skip(skip).limit(limit),
	])

	const dataWithSubs = await Promise.all(
		data.map(async news => {
			const subNews = await SubNews.find({ news: news._id })
			return {
				...news.toObject(), // agar Mongoose Document bo‘lsa
				subNews: subNews[0] || null,
			}
		})
	)

	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data: dataWithSubs,
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
	getNewsAndSub,
}
